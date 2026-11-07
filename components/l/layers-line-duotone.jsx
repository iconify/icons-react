import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bb8l5mttt.css';
import '../../css/c/c9txrcb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bb8l5mttt"/><path class="c9txrcb0v"/></g>`,
		"fallback": "solar:layers-line-duotone",
	});
}

export default Component;
