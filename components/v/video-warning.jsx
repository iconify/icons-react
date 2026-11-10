import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/t/t0yodebcq.css';
import '../../css/i/irpsjq9hr.css';
import '../../css/y/y9szotbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fi-43sb1e"/><path class="t0yodebcq"/><path class="irpsjq9hr"/><path class="y9szotbmb"/></g>`,
		"fallback": "andrsrxn:video-warning",
	});
}

export default Component;
