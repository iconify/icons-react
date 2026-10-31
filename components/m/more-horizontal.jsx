import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zp8zztb_h.css';
import '../../css/p/pd_j9ac0n.css';
import '../../css/v/vy76sqbzo.css';
import '../../css/d/d8ztfkciu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqZ5QCbsT" x1="10" x2="14" y1="10.13" y2="13.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zp8zztb_h"/><path class="pd_j9ac0n wm-deco"/><path fill="url(#SVGqZ5QCbsT)" class="vy76sqbzo wm-k"/><path class="d8ztfkciu wm-shadow"/></g>`,
		"fallback": "withicons-valentine:more-horizontal",
	});
}

export default Component;
