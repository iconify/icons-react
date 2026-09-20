import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymgf6m1vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymgf6m1vx"/>`,
		"fallback": "mingcute:numbers-90-sort-ascending-fill",
	});
}

export default Component;
