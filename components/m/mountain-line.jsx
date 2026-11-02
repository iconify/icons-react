import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq8k30bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq8k30bjj"/>`,
		"fallback": "mingcute:mountain-line",
	});
}

export default Component;
