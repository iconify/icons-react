import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6h-6lb-v.css';
import '../../css/a/aloe1j30k.css';
import '../../css/b/b-dnidp8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 15.42 4.14)" class="c6h-6lb-v"/><rect transform="matrix(-1 0 0 1 15.42 4.14)" class="aloe1j30k"/><path class="b-dnidp8l"/></g>`,
		"fallback": "andrsrxn:text-firstline-center",
	});
}

export default Component;
