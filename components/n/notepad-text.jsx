import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/ryaaoodfz.css';
import '../../css/b/bntsyqbab.css';
import '../../css/e/edfyy2vqd.css';
import '../../css/e/exbcuxf9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkKQ8metf" x1="9" x2="15" y1="2.99" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGkKQ8metf)" class="ryaaoodfz"/><path class="bntsyqbab wm-shine"/><path class="edfyy2vqd wm-shine"/><path class="exbcuxf9x wm-shine"/></g>`,
		"fallback": "withicons-utsav:notepad-text",
	});
}

export default Component;
