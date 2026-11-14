import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4i0v4m3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4i0v4m3y"/>`,
		"fallback": "hugeicons:restaurant-table",
	});
}

export default Component;
