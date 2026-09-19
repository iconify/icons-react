import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kyg4webhc.css';
import '../../css/q/q9tflhftz.css';
import '../../css/i/iem8lp2xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kyg4webhc"/><path class="q9tflhftz"/><path class="iem8lp2xo"/></g>`,
		"fallback": "hugeicons:package-remove",
	});
}

export default Component;
