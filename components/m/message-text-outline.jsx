import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4m548dv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4m548dv"/>`,
		"fallback": "teenyicons:message-text-outline",
	});
}

export default Component;
