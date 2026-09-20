import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evsr84xeg.css';
import '../../css/n/npjnncbsm.css';
import '../../css/v/v0-ucqeuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="evsr84xeg"/><path class="npjnncbsm"/><path class="v0-ucqeuw"/></g>`,
		"fallback": "solar:login-3-line-duotone",
	});
}

export default Component;
