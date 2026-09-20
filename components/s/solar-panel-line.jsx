import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb9y4lqfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb9y4lqfb"/>`,
		"fallback": "mingcute:solar-panel-line",
	});
}

export default Component;
