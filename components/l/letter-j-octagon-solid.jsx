import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu-8o6bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu-8o6bpr"/>`,
		"fallback": "mynaui:letter-j-octagon-solid",
	});
}

export default Component;
