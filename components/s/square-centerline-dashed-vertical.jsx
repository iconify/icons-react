import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drxkd2_9v.css';
import '../../css/a/altvz6bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="drxkd2_9v"/><path class="altvz6bon"/></g>`,
		"fallback": "hugeicons:square-centerline-dashed-vertical",
	});
}

export default Component;
