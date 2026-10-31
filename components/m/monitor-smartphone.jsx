import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/b/bxdrfgzqm.css';
import '../../css/t/tmt7rk3my.css';
import '../../css/f/fih-10jcd.css';
import '../../css/r/ru-j-cbod.css';
import '../../css/v/vmpm1cc8k.css';
import '../../css/l/llfi716in.css';
import '../../css/y/ymvj82b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG19H41c5k" cx="6.64" cy="5.86" r="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="bxdrfgzqm wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="tmt7rk3my wm-a"/><path fill="url(#SVG19H41c5k)" class="fih-10jcd wm-k"/><path class="ru-j-cbod wm-k"/><path class="vmpm1cc8k wm-shine"/><path class="llfi716in wm-s"/><path class="wm-s ymvj82b1g"/></g>`,
		"fallback": "withicons-rangoli:monitor-smartphone",
	});
}

export default Component;
