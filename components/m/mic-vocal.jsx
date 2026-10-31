import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/tdvuw03ie.css';
import '../../css/q/qppooobrg.css';
import '../../css/i/i11-ucb-n.css';
import '../../css/k/keke43_yg.css';
import '../../css/x/xg3vi01rz.css';
import '../../css/h/htu4x3b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUvHqicHt" x1="10.49" x2="14.49" y1="2.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="tdvuw03ie wm-k"/><path class="qppooobrg wm-deco"/><path fill="url(#SVGUvHqicHt)" class="i11-ucb-n wm-k"/><path class="keke43_yg wm-shadow"/><path class="wm-shine xg3vi01rz"/><path class="htu4x3b_j wm-shine"/></g>`,
		"fallback": "withicons-valentine:mic-vocal",
	});
}

export default Component;
