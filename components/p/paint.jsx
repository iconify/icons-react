import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgnx6ab5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgnx6ab5r"/>`,
		"fallback": "cil:paint",
	});
}

export default Component;
