import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ow44-uqiu.css';
import '../../css/f/fvun-abzf.css';
import '../../css/c/c_apmbcjm.css';
import '../../css/d/df2pzh_wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ow44-uqiu"/><path class="fvun-abzf"/><path class="c_apmbcjm"/><path class="df2pzh_wy"/></g>`,
		"fallback": "solar:microphone-large-broken",
	});
}

export default Component;
