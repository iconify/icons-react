import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8ugbvd9v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8ugbvd9v"/>`,
		"fallback": "teenyicons:message-tick-outline",
	});
}

export default Component;
