import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa3abwy6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa3abwy6r"/>`,
		"fallback": "mingcute:mail-question-mark-fill",
	});
}

export default Component;
