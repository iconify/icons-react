import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2x4u1b7q.css';

const viewBox = {"width":344,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2x4u1b7q"/>`,
		"fallback": "zmdi:watch",
	});
}

export default Component;
