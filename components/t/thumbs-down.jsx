import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hb_9b2_yp.css';
import '../../css/z/zpn4-xuco.css';
import '../../css/t/thpyhxqni.css';
import '../../css/u/ut303sbzh.css';
import '../../css/g/gigg0kb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGw018dcZM" x1="9.82" x2="13.82" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hb_9b2_yp wm-k"/><path class="wm-deco zpn4-xuco"/><path fill="url(#SVGw018dcZM)" class="thpyhxqni wm-k"/><path class="ut303sbzh wm-shadow"/><path class="gigg0kb2f wm-shine"/></g>`,
		"fallback": "withicons-valentine:thumbs-down",
	});
}

export default Component;
