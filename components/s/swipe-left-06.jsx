import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b20c5xbut.css';
import '../../css/o/o8ip2lepv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b20c5xbut"/><path class="o8ip2lepv"/></g>`,
		"fallback": "hugeicons:swipe-left-06",
	});
}

export default Component;
