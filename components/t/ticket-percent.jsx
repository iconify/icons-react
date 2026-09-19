import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o4p69eghh.css';
import '../../css/e/e16z-6bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="o4p69eghh"/><path class="e16z-6bec"/></g>`,
		"fallback": "hugeicons:ticket-percent",
	});
}

export default Component;
