import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmagrtgce.css';
import '../../css/a/apon_531b.css';
import '../../css/a/an1oj5iwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vmagrtgce"/><path class="apon_531b"/><path class="an1oj5iwf"/></g>`,
		"fallback": "hugeicons:mail-account-01",
	});
}

export default Component;
