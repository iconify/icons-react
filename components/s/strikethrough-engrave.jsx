import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wvopw9ncy.css';
import '../../css/t/two_v_bki.css';
import '../../css/q/q1-hjfupd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wvopw9ncy"/><path class="two_v_bki wm-shadow"/><path class="q1-hjfupd"/></g>`,
		"fallback": "withicons:strikethrough-engrave",
	});
}

export default Component;
