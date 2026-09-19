import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wm5ytgb6u.css';
import '../../css/y/y_1a9pbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wm5ytgb6u"/><path class="y_1a9pbeq"/></g>`,
		"fallback": "hugeicons:package-receive",
	});
}

export default Component;
