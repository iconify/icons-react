import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jg727-bmc.css';
import '../../css/c/c3tq19bps.css';
import '../../css/r/rnno1ib4f.css';
import '../../css/t/t1wdvofuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jg727-bmc"/><path class="c3tq19bps wm-s"/><path class="rnno1ib4f wm-k"/><path class="t1wdvofuo wm-s"/></g>`,
		"fallback": "withicons:smartphone-charging-sketch",
	});
}

export default Component;
