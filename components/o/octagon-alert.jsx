import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/nbijyobqx.css';
import '../../css/y/yv5ibpmof.css';
import '../../css/q/qjf92tb9y.css';
import '../../css/p/pij03d3qf.css';
import '../../css/b/b0-kjedwa.css';
import '../../css/e/ez5u33naz.css';
import '../../css/o/oxghl1bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="nbijyobqx wm-k"/><path class="wm-deco yv5ibpmof"/><path class="qjf92tb9y wm-k"/><path fill="url(#SVGWIPAFndQ)" class="pij03d3qf wm-k"/><path class="b0-kjedwa wm-shadow"/><path class="ez5u33naz wm-shine"/><path class="oxghl1bzr wm-shine"/></g>`,
		"fallback": "withicons-valentine:octagon-alert",
	});
}

export default Component;
