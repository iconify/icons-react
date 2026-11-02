import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfi-3h6ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfi-3h6ou"/>`,
		"fallback": "mingcute:shopping-bag-2-line",
	});
}

export default Component;
