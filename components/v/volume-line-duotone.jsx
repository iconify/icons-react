import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c-5x-wbtr.css';
import '../../css/j/j5ywvk3mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c-5x-wbtr"/><path class="j5ywvk3mq"/></g>`,
		"fallback": "solar:volume-line-duotone",
	});
}

export default Component;
