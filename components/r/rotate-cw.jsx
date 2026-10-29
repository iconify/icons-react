import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoz3ulbzt.css';
import '../../css/v/vgocppb_n.css';
import '../../css/s/s4xi49bgm.css';
import '../../css/j/jn3bm3_rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uoz3ulbzt wm-k"/><path class="vgocppb_n wm-k"/><path class="s4xi49bgm wm-k"/><path class="jn3bm3_rc wm-shine"/></g>`,
		"fallback": "withicons-anime:rotate-cw",
	});
}

export default Component;
