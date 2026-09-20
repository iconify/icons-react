import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en96x3gyh.css';
import '../../css/h/h68a5vtzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="en96x3gyh"/><circle class="h68a5vtzz"/>`,
		"fallback": "lets-icons:status-list",
	});
}

export default Component;
