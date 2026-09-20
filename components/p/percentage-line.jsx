import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4be6p33p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4be6p33p"/>`,
		"fallback": "mingcute:percentage-line",
	});
}

export default Component;
