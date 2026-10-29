import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx38fwboo.css';
import '../../css/r/razttccmb.css';
import '../../css/i/iib7mbbta.css';
import '../../css/q/qox4_50ly.css';
import '../../css/w/w4anm-a-o.css';
import '../../css/h/h4iwvoacx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx38fwboo wm-k"/><path class="razttccmb wm-k"/><path class="iib7mbbta wm-k"/><path class="qox4_50ly wm-k"/><path class="w4anm-a-o wm-shine"/><path class="h4iwvoacx wm-a"/></g>`,
		"fallback": "withicons-anime:receipt-text",
	});
}

export default Component;
