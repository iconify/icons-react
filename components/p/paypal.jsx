import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfneizbci.css';
import '../../css/g/g81nz19ce.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfneizbci"/><path class="g81nz19ce"/>`,
		"fallback": "foundation:paypal",
	});
}

export default Component;
