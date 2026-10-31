import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wfwuuacrh.css';
import '../../css/p/p171blbkc.css';
import '../../css/j/jtd78v1co.css';
import '../../css/f/fmo2l4b2l.css';
import '../../css/h/h95ih66qz.css';
import '../../css/u/udnla3o5f.css';
import '../../css/r/rdkz13bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wfwuuacrh wm-k"/><path class="p171blbkc wm-deco"/><path class="jtd78v1co wm-k"/><path fill="url(#SVGFXzhPeEy)" class="fmo2l4b2l wm-k"/><path class="h95ih66qz wm-shadow"/><path class="udnla3o5f wm-shine"/><path class="rdkz13bxv wm-shine"/></g>`,
		"fallback": "withicons-valentine:shield-user",
	});
}

export default Component;
