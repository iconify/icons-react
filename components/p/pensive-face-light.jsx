import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hfq8jpu7i.css';
import '../../css/w/wy2n5sbyh.css';
import '../../css/w/wekf8bf4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="hfq8jpu7i"/><path class="wy2n5sbyh"/><path class="wekf8bf4i"/></g>`,
		"fallback": "iconamoon:pensive-face-light",
	});
}

export default Component;
