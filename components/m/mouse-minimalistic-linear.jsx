import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yb8gbubnt.css';
import '../../css/h/hrrhaz5ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yb8gbubnt"/><path class="hrrhaz5ku"/></g>`,
		"fallback": "solar:mouse-minimalistic-linear",
	});
}

export default Component;
