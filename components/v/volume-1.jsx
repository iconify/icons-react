import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/n/n4ykhvbbo.css';
import '../../css/z/z75asjv7c.css';
import '../../css/u/u4a-xhbqh.css';
import '../../css/x/xnb1rly8k.css';
import '../../css/m/m2iof_zzj.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGdj8PLbGL" cx="4.98" cy="7.97" r="15.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="n4ykhvbbo wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a z75asjv7c"/><path fill="url(#SVGdj8PLbGL)" class="u4a-xhbqh wm-k"/><path class="wm-shine xnb1rly8k"/><path class="m2iof_zzj wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:volume-1",
	});
}

export default Component;
