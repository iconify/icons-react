import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpu5q9b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpu5q9b-j"/>`,
		"fallback": "mingcute:venus-and-mars-fill",
	});
}

export default Component;
