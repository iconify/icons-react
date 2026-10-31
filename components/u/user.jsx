import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/x/xjgcrhb8p.css';
import '../../css/j/juyy4wb_t.css';
import '../../css/x/x_m4m23zm.css';
import '../../css/x/xiy24xl5g.css';
import '../../css/q/qiumesbwi.css';
import '../../css/y/yef3vbb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG49bJmcyk" x1="10" x2="14" y1="2.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k xjgcrhb8p"/><path class="juyy4wb_t wm-deco"/><path fill="url(#SVG49bJmcyk)" class="wm-k x_m4m23zm"/><path class="wm-shadow xiy24xl5g"/><path class="qiumesbwi wm-shine"/><path class="wm-shine yef3vbb4d"/></g>`,
		"fallback": "withicons-valentine:user",
	});
}

export default Component;
