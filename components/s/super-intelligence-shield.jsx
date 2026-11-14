import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w99w8acpr.css';
import '../../css/f/fn6wy8ujq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w99w8acpr"/><path class="fn6wy8ujq"/></g>`,
		"fallback": "hugeicons:super-intelligence-shield",
	});
}

export default Component;
