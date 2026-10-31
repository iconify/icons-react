import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/x/x7xucqbhy.css';
import '../../css/m/m20-rjb3q.css';
import '../../css/q/q0k9k_jhk.css';
import '../../css/c/ckn-9lkqk.css';
import '../../css/e/eg-s1wb7t.css';
import '../../css/u/u9w_a9bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBf3pLMEL" x1="10" x2="14" y1="1.52" y2="20.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k x7xucqbhy"/><path class="m20-rjb3q wm-s"/><path class="q0k9k_jhk wm-k"/><path fill="url(#SVGBf3pLMEL)" class="ckn-9lkqk wm-k"/><path class="eg-s1wb7t wm-s"/><path class="u9w_a9bdk wm-shadow"/></g>`,
		"fallback": "withicons-valentine:poinsettia",
	});
}

export default Component;
