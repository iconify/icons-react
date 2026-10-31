import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/s_v_jsbdf.css';
import '../../css/f/fn4gumbno.css';
import '../../css/f/fnjhddczm.css';
import '../../css/u/u6xocwbgd.css';
import '../../css/i/i84xrhbpu.css';
import '../../css/t/tcke9f_2h.css';
import '../../css/y/y6oe5wb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiS4mDeNY" x1="10" x2="14" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="s_v_jsbdf wm-k"/><path class="fn4gumbno wm-a"/><path class="fnjhddczm wm-deco"/><path class="u6xocwbgd wm-k"/><path fill="url(#SVGiS4mDeNY)" class="i84xrhbpu wm-k"/><path class="tcke9f_2h wm-a"/><path class="wm-shadow y6oe5wb_v"/></g>`,
		"fallback": "withicons-valentine:trash-2",
	});
}

export default Component;
