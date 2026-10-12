import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2w_usb8e.css';
import '../../css/p/p0fmtdpyb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2w_usb8e"/><path class="p0fmtdpyb"/>`,
		"fallback": "energy-icons:owl-20-bold",
	});
}

export default Component;
