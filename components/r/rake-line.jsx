import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfyb8iuwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfyb8iuwa"/>`,
		"fallback": "mingcute:rake-line",
	});
}

export default Component;
