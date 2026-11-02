import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6-c51b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6-c51b7q"/>`,
		"fallback": "mingcute:pencil-2-fill",
	});
}

export default Component;
