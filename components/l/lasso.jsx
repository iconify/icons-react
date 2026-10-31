import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bv50qq7gi.css';
import '../../css/u/u6u6orbca.css';
import '../../css/v/vu_5owbqd.css';
import '../../css/m/mcpqe_klv.css';
import '../../css/p/p1vz3ac_y.css';
import '../../css/m/mnioilbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGykVPrcod" x1="10" x2="14" y1="1.52" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bv50qq7gi wm-k"/><path class="u6u6orbca wm-a"/><path class="vu_5owbqd wm-deco"/><path fill="url(#SVGykVPrcod)" class="mcpqe_klv wm-k"/><path class="p1vz3ac_y wm-a"/><path class="mnioilbfz wm-shadow"/></g>`,
		"fallback": "withicons-valentine:lasso",
	});
}

export default Component;
