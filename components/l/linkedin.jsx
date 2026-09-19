import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb8qd6bbu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb8qd6bbu"/>`,
		"fallback": "devicon-plain:linkedin",
	});
}

export default Component;
