import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyajv3zio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyajv3zio"/>`,
		"fallback": "mingcute:parentheses-fill",
	});
}

export default Component;
