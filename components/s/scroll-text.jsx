import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pd0d5cbqy.css';
import '../../css/c/cv4_m4d5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHJDfnd3F" x1="9" x2="15" y1="2" y2="21.97" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHJDfnd3F)" class="pd0d5cbqy"/><path class="cv4_m4d5m wm-shine"/></g>`,
		"fallback": "withicons-utsav:scroll-text",
	});
}

export default Component;
