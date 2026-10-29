import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8y7yf-ve.css';
import '../../css/c/ciu-12f_r.css';
import '../../css/o/oq9cuob_h.css';
import '../../css/p/pdz-qnx8r.css';
import '../../css/c/c4_wodreq.css';
import '../../css/z/z1by332af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i8y7yf-ve wm-deco"/><path class="ciu-12f_r wm-deco"/><path class="oq9cuob_h wm-deco"/><path class="pdz-qnx8r wm-k"/><path class="c4_wodreq wm-a"/><path class="wm-k z1by332af"/></g>`,
		"fallback": "withicons:thermometer-blueprint",
	});
}

export default Component;
