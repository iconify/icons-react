import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uxr_-vg3s.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';
import '../../css/n/nt0n0fb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uxr_-vg3s wm-k"/><path class="wm-shadow x3-9faclu"/><path class="wm-k wxwl6_qzl"/><path class="nt0n0fb6x wm-a"/></g>`,
		"fallback": "withicons:message-circle-question-engrave",
	});
}

export default Component;
