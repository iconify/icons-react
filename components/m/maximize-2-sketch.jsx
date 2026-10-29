import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/avuc086wx.css';
import '../../css/g/g4vf-sb9r.css';
import '../../css/u/ucqk0cbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="avuc086wx wm-k"/><path class="g4vf-sb9r wm-k"/><path class="ucqk0cbzc wm-a"/></g>`,
		"fallback": "withicons:maximize-2-sketch",
	});
}

export default Component;
