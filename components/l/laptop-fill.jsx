import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-sh2tsju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-sh2tsju"/>`,
		"fallback": "mingcute:laptop-fill",
	});
}

export default Component;
