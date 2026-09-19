import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1y_e7bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1y_e7bny"/>`,
		"fallback": "circum:pen",
	});
}

export default Component;
