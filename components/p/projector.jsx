import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/k55f8zbcd.css';
import '../../css/a/at6q-odmi.css';
import '../../css/c/cpymrjb7j.css';
import '../../css/v/vj3rtqbwv.css';
import '../../css/b/byfe6twtz.css';
import '../../css/v/vlp648bps.css';
import '../../css/z/zt_vh0wfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9dpxidXl" x1="10" x2="14" y1="5.51" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="k55f8zbcd wm-k"/><path class="at6q-odmi wm-deco"/><path class="cpymrjb7j wm-k"/><path fill="url(#SVG9dpxidXl)" class="vj3rtqbwv wm-k"/><path class="byfe6twtz wm-shadow"/><path class="vlp648bps wm-shine"/><path class="wm-shine zt_vh0wfq"/></g>`,
		"fallback": "withicons-valentine:projector",
	});
}

export default Component;
