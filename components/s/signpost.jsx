import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fjrg02bnk.css';
import '../../css/a/arzyp60gl.css';
import '../../css/v/v81xbobzf.css';
import '../../css/q/q3wsc0m5n.css';
import '../../css/j/j_sxxqpnt.css';
import '../../css/r/rxowbjwog.css';
import '../../css/l/l_74irbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFktW4cac" x1="10" x2="14" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fjrg02bnk wm-k"/><path class="arzyp60gl wm-a"/><path class="v81xbobzf wm-deco"/><path fill="url(#SVGFktW4cac)" class="q3wsc0m5n wm-k"/><path class="j_sxxqpnt wm-a"/><path class="rxowbjwog wm-shadow"/><path class="l_74irbgq wm-shine"/></g>`,
		"fallback": "withicons-valentine:signpost",
	});
}

export default Component;
