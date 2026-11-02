import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3_zluyok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3_zluyok"/>`,
		"fallback": "mingcute:lens-concave-line",
	});
}

export default Component;
