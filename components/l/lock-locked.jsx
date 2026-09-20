import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7srk4lqy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7srk4lqy"/>`,
		"fallback": "oi:lock-locked",
	});
}

export default Component;
