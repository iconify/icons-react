import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1e3d9t9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1e3d9t9c"/>`,
		"fallback": "hugeicons:swipe-down-07",
	});
}

export default Component;
