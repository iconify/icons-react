import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7hvnxb6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7hvnxb6u"/>`,
		"fallback": "selfhst:troddit-dark",
	});
}

export default Component;
