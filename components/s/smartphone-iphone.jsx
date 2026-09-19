import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3-7xhb6q.css';

const viewBox = {"width":280,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3-7xhb6q"/>`,
		"fallback": "zmdi:smartphone-iphone",
	});
}

export default Component;
