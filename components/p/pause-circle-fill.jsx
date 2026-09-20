import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7dy5yb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7dy5yb9z"/>`,
		"fallback": "mingcute:pause-circle-fill",
	});
}

export default Component;
