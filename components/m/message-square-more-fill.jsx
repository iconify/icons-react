import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4ia3b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4ia3b_o"/>`,
		"fallback": "mingcute:message-square-more-fill",
	});
}

export default Component;
