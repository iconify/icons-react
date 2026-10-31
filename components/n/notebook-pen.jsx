import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zorv4nben.css';
import '../../css/g/glljo6-oa.css';
import '../../css/j/j4lcq0bid.css';
import '../../css/m/mpw7b_nlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1OpDTm5P" x1="9.19" x2="15.19" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wm-s zorv4nben"/><path fill="url(#SVG1OpDTm5P)" class="glljo6-oa"/><path class="j4lcq0bid wm-s"/><path class="mpw7b_nlr wm-shine"/></g>`,
		"fallback": "withicons-utsav:notebook-pen",
	});
}

export default Component;
