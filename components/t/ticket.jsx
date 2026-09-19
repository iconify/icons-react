import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7gk7-b_e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7gk7-b_e"/>`,
		"fallback": "ep:ticket",
	});
}

export default Component;
