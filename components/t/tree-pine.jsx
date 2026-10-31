import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i3t2_1b7v.css';
import '../../css/q/qdf613y8r.css';
import '../../css/p/p1d-_b6_q.css';
import '../../css/o/ozjukxb6v.css';
import '../../css/s/sr4xo9bny.css';
import '../../css/q/qtpczrbcb.css';
import '../../css/u/udhqxvbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="i3t2_1b7v"/><path class="qdf613y8r wm-a"/><path class="p1d-_b6_q wm-shine"/><path class="ozjukxb6v wm-shine"/><path class="sr4xo9bny wm-shine"/><path class="qtpczrbcb wm-shine"/><path class="udhqxvbow wm-shine"/></g>`,
		"fallback": "withicons-utsav:tree-pine",
	});
}

export default Component;
