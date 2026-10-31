import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/scc9i7b6j.css';
import '../../css/u/u1tnf0bmk.css';
import '../../css/z/zyprdowut.css';
import '../../css/l/levly0b2x.css';
import '../../css/l/lfhjgfcgs.css';
import '../../css/o/oxvsubc4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN25Lzemm" x1="10" x2="14" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="scc9i7b6j wm-k"/><path class="u1tnf0bmk wm-deco"/><path fill="url(#SVGN25Lzemm)" class="wm-k zyprdowut"/><path class="levly0b2x wm-shadow"/><path class="lfhjgfcgs wm-shine"/><path class="oxvsubc4t wm-shine"/></g>`,
		"fallback": "withicons-valentine:mountain",
	});
}

export default Component;
