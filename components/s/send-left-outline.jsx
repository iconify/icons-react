import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7r-9rbzo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7r-9rbzo"/>`,
		"fallback": "teenyicons:send-left-outline",
	});
}

export default Component;
