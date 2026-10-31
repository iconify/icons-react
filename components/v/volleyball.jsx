import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/nv26rhb0f.css';
import '../../css/r/rr67kk2zb.css';
import '../../css/b/bc5ip014i.css';
import '../../css/d/dd6did56b.css';
import '../../css/y/yy07fvbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGULAwGP0g" x1="9.97" x2="13.97" y1="1.52" y2="22.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="nv26rhb0f wm-k"/><path fill="url(#SVGULAwGP0g)" class="rr67kk2zb wm-k"/><path class="bc5ip014i wm-shadow"/><path class="dd6did56b wm-shine"/><path class="wm-shine yy07fvbah"/></g>`,
		"fallback": "withicons-valentine:volleyball",
	});
}

export default Component;
