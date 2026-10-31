import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cr1mfbcya.css';
import '../../css/o/op2jjusfv.css';
import '../../css/g/g9eyosb_l.css';
import '../../css/k/kld99_b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHxZzFkJH" x1="9" x2="15" y1="2.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHxZzFkJH)" class="cr1mfbcya"/><path class="op2jjusfv wm-shine"/><path class="g9eyosb_l wm-shine"/><path class="kld99_b6t wm-shine"/></g>`,
		"fallback": "withicons-utsav:mushroom",
	});
}

export default Component;
