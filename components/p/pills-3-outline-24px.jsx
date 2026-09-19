import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4u-2p_ie.css';
import '../../css/q/q3c080bmg.css';
import '../../css/w/wm0qbnrvr.css';
import '../../css/m/mrkguu9rt.css';
import '../../css/h/hlc0oltyy.css';
import '../../css/y/ypo96kbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4u-2p_ie"/><path clip-rule="evenodd" class="q3c080bmg"/><path class="wm0qbnrvr"/><path clip-rule="evenodd" class="mrkguu9rt"/><path class="hlc0oltyy"/><path clip-rule="evenodd" class="ypo96kbmb"/></g>`,
		"fallback": "healthicons:pills-3-outline-24px",
	});
}

export default Component;
