import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bscugobqr.css';
import '../../css/r/r4jxosbrl.css';
import '../../css/c/c2a18-f_t.css';
import '../../css/l/lqxhbobtr.css';
import '../../css/o/o8rdqgjqc.css';
import '../../css/y/yp_lprb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOQBkCeqO" x1="10.01" x2="14.01" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bscugobqr wm-k"/><path class="r4jxosbrl wm-deco"/><path fill="url(#SVGOQBkCeqO)" class="c2a18-f_t wm-k"/><path class="lqxhbobtr wm-shadow"/><path class="o8rdqgjqc wm-shine"/><path class="wm-shine yp_lprb2h"/></g>`,
		"fallback": "withicons-valentine:stroller",
	});
}

export default Component;
