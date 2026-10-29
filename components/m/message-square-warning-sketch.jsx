import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d6p02yb1m.css';
import '../../css/g/g_gpx3b3t.css';
import '../../css/q/qmfyozb_l.css';
import '../../css/h/hwhzvl0qe.css';
import '../../css/d/dnj10ls6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d6p02yb1m"/><path class="g_gpx3b3t wm-k"/><path class="qmfyozb_l wm-a"/><path class="hwhzvl0qe wm-k"/><path class="dnj10ls6m wm-a"/></g>`,
		"fallback": "withicons:message-square-warning-sketch",
	});
}

export default Component;
