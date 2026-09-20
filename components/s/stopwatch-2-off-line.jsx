import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7nm95z8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7nm95z8i"/>`,
		"fallback": "mingcute:stopwatch-2-off-line",
	});
}

export default Component;
