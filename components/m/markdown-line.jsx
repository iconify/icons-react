import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-o72s6ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-o72s6ja"/>`,
		"fallback": "mingcute:markdown-line",
	});
}

export default Component;
