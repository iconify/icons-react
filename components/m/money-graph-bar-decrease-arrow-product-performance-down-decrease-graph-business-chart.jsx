import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs6j3rbvp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs6j3rbvp"/>`,
		"fallback": "streamline:money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart",
	});
}

export default Component;
