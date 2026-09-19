import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eb4elj5vv.css';
import '../../css/n/njep7bbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eb4elj5vv"/><path class="njep7bbku"/></g>`,
		"fallback": "hugeicons:keyboard",
	});
}

export default Component;
