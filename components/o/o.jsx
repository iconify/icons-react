import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di82h1dsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di82h1dsg"/>`,
		"fallback": "healthicons:o",
	});
}

export default Component;
