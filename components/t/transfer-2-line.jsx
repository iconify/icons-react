import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2y6cq4at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2y6cq4at"/>`,
		"fallback": "mingcute:transfer-2-line",
	});
}

export default Component;
