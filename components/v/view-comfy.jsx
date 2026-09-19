import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1zlj_b8d.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1zlj_b8d"/>`,
		"fallback": "zmdi:view-comfy",
	});
}

export default Component;
