import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wp2-wcblg.css';
import '../../css/a/acn1-4bur.css';
import '../../css/u/u_9_1i1ln.css';
import '../../css/g/g2wh61bpz.css';
import '../../css/e/eke9d3bwj.css';
import '../../css/y/yy0jbacoc.css';
import '../../css/t/t55y2qspw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDQ0hY1zS" x1="9.62" x2="13.62" y1="4" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k wp2-wcblg"/><path class="acn1-4bur wm-deco"/><path class="u_9_1i1ln wm-k"/><path fill="url(#SVGDQ0hY1zS)" class="g2wh61bpz wm-k"/><path class="eke9d3bwj wm-shadow"/><path class="wm-shine yy0jbacoc"/><path class="t55y2qspw wm-shine"/></g>`,
		"fallback": "withicons-valentine:turtle",
	});
}

export default Component;
