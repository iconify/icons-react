import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4q0bc4lm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4q0bc4lm"/>`,
		"fallback": "fa6-brands:itunes",
	});
}

export default Component;
