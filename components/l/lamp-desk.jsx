import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/r5v8ldxdt.css';
import '../../css/r/r-xvbqj_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2d6hVbtO" x1="9.01" x2="15.01" y1="3.19" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG2d6hVbtO)" class="r5v8ldxdt"/><path class="r-xvbqj_o wm-shine"/></g>`,
		"fallback": "withicons-utsav:lamp-desk",
	});
}

export default Component;
