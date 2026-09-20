import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8s0sbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg8s0sbql"/>`,
		"fallback": "mingcute:watch-fill",
	});
}

export default Component;
