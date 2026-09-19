import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i66k1d0th.css';
import '../../css/w/won729bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i66k1d0th"/><path class="won729bwh"/></g>`,
		"fallback": "iconoir:mouse-button-right",
	});
}

export default Component;
