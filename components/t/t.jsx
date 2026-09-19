import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce8wm623l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce8wm623l"/>`,
		"fallback": "healthicons:t",
	});
}

export default Component;
