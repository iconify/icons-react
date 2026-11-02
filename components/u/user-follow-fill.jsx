import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j534dy9ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j534dy9ii"/>`,
		"fallback": "mingcute:user-follow-fill",
	});
}

export default Component;
