import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy-ln-b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy-ln-b5q"/>`,
		"fallback": "mingcute:search-ai-fill",
	});
}

export default Component;
