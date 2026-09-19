import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3j1uwd6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3j1uwd6s"/>`,
		"fallback": "healthicons:ui-folder-family",
	});
}

export default Component;
