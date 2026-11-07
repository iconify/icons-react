import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mmj0m1bao.css';
import '../../css/o/oxw8pabhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mmj0m1bao"/><path class="oxw8pabhp"/></g>`,
		"fallback": "solar:map-arrow-right-line-duotone",
	});
}

export default Component;
