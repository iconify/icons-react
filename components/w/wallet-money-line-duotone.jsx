import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j60yrybix.css';
import '../../css/q/qd88d0khh.css';
import '../../css/k/kknuolbeb.css';
import '../../css/s/s56xsmbuu.css';
import '../../css/z/zu2_i6bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j60yrybix"/><path class="qd88d0khh"/><path class="kknuolbeb"/><path class="s56xsmbuu"/><path class="zu2_i6bpg"/></g>`,
		"fallback": "solar:wallet-money-line-duotone",
	});
}

export default Component;
