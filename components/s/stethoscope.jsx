import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/j6us6ebgl.css';
import '../../css/w/wjfcld51j.css';
import '../../css/r/re854jcfp.css';
import '../../css/r/rz2rpzadc.css';
import '../../css/b/bhvfds95o.css';
import '../../css/f/fv2z9xbox.css';
import '../../css/t/tb3zp3iqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYBppje9v" x1="11" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="j6us6ebgl wm-k"/><path class="wjfcld51j wm-deco"/><path class="re854jcfp wm-k"/><path fill="url(#SVGYBppje9v)" class="rz2rpzadc wm-k"/><path class="bhvfds95o wm-shadow"/><path class="fv2z9xbox wm-shine"/><path class="tb3zp3iqh wm-shine"/></g>`,
		"fallback": "withicons-valentine:stethoscope",
	});
}

export default Component;
