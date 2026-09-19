import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9fysyb0q.css';
import '../../css/p/pvqoq6bgh.css';
import '../../css/x/x-wl53b_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9fysyb0q"/><path class="pvqoq6bgh"/><path class="x-wl53b_q"/>`,
		"fallback": "ion:scissors",
	});
}

export default Component;
