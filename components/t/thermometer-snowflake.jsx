import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/u/umpv90bga.css';
import '../../css/o/ov384kq4w.css';
import '../../css/a/aa0si9bxi.css';
import '../../css/z/zk2r6n8ce.css';
import '../../css/a/acimzgncm.css';
import '../../css/p/p6ikiobpu.css';
import '../../css/i/i0itsu56j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGgEqRYrAf" cx="14.34" cy="6.46" r="19.88" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="umpv90bga wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="ov384kq4w wm-a"/><path fill="url(#SVGgEqRYrAf)" class="aa0si9bxi wm-k"/><path class="wm-k zk2r6n8ce"/><path class="acimzgncm wm-shine"/><path class="p6ikiobpu wm-deco"/><path class="i0itsu56j wm-deco"/></g>`,
		"fallback": "withicons-rangoli:thermometer-snowflake",
	});
}

export default Component;
