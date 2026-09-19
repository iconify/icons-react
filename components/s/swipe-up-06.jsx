import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqu6jzbcz.css';
import '../../css/l/le4fk-bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wqu6jzbcz"/><path class="le4fk-bwa"/></g>`,
		"fallback": "hugeicons:swipe-up-06",
	});
}

export default Component;
