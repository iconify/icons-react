import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaj032vab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaj032vab"/>`,
		"fallback": "mdi:restaurant-menu",
	});
}

export default Component;
