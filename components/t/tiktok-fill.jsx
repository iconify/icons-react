import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejk75kb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejk75kb4z"/>`,
		"fallback": "ri:tiktok-fill",
	});
}

export default Component;
