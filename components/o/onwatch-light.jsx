import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar-w1rbce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar-w1rbce"/>`,
		"fallback": "selfhst:onwatch-light",
	});
}

export default Component;
