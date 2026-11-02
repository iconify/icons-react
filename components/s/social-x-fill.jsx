import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brjq0bcwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brjq0bcwz"/>`,
		"fallback": "mingcute:social-x-fill",
	});
}

export default Component;
