import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulzgxb59r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulzgxb59r"/>`,
		"fallback": "iconoir:swipe-two-fingers-down-gesture",
	});
}

export default Component;
