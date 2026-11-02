import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyfe3abty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyfe3abty"/>`,
		"fallback": "mingcute:refund-dollar-line",
	});
}

export default Component;
