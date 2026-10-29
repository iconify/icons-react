import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qyfmmpgqr.css';
import '../../css/x/x96k-accp.css';
import '../../css/q/q-ykn3bot.css';
import '../../css/z/z-a4k4b8u.css';
import '../../css/w/wneoubc6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qyfmmpgqr wm-k"/><path class="wm-a x96k-accp"/><path class="q-ykn3bot wm-shadow"/><path class="wm-k z-a4k4b8u"/><path class="wm-a wneoubc6n"/></g>`,
		"fallback": "withicons:sprout-engrave",
	});
}

export default Component;
