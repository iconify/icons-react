import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/w1ltnnb7c.css';
import '../../css/t/tjguxxbga.css';
import '../../css/j/jsobrdklm.css';
import '../../css/c/c11ho-mfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtWIrRd4a" x1="9" x2="15" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGtWIrRd4a)" class="w1ltnnb7c"/><path class="tjguxxbga wm-shine"/><path class="jsobrdklm wm-shine"/><path class="c11ho-mfo wm-shine"/></g>`,
		"fallback": "withicons-utsav:toilet",
	});
}

export default Component;
