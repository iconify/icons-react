import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw2r7sb3z.css';

const viewBox = {"width":376,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw2r7sb3z"/>`,
		"fallback": "zmdi:paypal",
	});
}

export default Component;
