import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3t03_b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3t03_b4u"/>`,
		"fallback": "mynaui:math-square",
	});
}

export default Component;
