import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onhg1w-oy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onhg1w-oy"/>`,
		"fallback": "selfhst:syncwave-light",
	});
}

export default Component;
