import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8mxwke8u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8mxwke8u"/>`,
		"fallback": "fa6-solid:square-caret-right",
	});
}

export default Component;
