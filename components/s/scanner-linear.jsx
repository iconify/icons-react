import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uama0jbpo.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/j/jie9kjmui.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/y/yirxaabex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uama0jbpo"/><path class="ijwbgek4s"/><path class="jie9kjmui"/><path class="w1fn0ab-e"/><path class="yirxaabex"/></g>`,
		"fallback": "solar:scanner-linear",
	});
}

export default Component;
