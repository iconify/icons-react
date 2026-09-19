import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkbae3hss.css';
import '../../css/k/ki89_nbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkbae3hss"/><path class="ki89_nbwi"/>`,
		"fallback": "circum:volume-high",
	});
}

export default Component;
