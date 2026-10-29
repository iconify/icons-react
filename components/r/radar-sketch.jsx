import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ia2gzct5r.css';
import '../../css/n/nd9pb_bwa.css';
import '../../css/k/kd08ygb7j.css';
import '../../css/t/t0oo84s0x.css';
import '../../css/q/qcidxubyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ia2gzct5r wm-a"/><path class="nd9pb_bwa wm-k"/><path class="kd08ygb7j wm-k"/><path class="t0oo84s0x wm-a"/><path class="qcidxubyu wm-s"/></g>`,
		"fallback": "withicons:radar-sketch",
	});
}

export default Component;
