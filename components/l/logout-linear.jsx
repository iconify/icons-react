import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/od-msub9u.css';
import '../../css/x/xm0m6vgjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="od-msub9u"/><path class="xm0m6vgjk"/></g>`,
		"fallback": "solar:logout-linear",
	});
}

export default Component;
