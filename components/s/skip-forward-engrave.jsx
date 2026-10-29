import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqx1ccb4e.css';
import '../../css/k/kcp0sf6ge.css';
import '../../css/d/d56nsib3c.css';
import '../../css/d/dhuewpeee.css';
import '../../css/b/byf_cebpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bqx1ccb4e wm-k"/><path class="kcp0sf6ge wm-a"/><path class="d56nsib3c wm-shadow"/><path class="dhuewpeee wm-k"/><path class="byf_cebpl wm-a"/></g>`,
		"fallback": "withicons:skip-forward-engrave",
	});
}

export default Component;
