import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrqit7rxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrqit7rxy"/>`,
		"fallback": "griddy-icons:signpost-filled",
	});
}

export default Component;
