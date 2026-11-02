import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilgc15b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilgc15b5q"/>`,
		"fallback": "mingcute:rocket-fill",
	});
}

export default Component;
