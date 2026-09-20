import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8_x55vev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8_x55vev"/>`,
		"fallback": "uil:phone-times",
	});
}

export default Component;
