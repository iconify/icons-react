import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjv6_i5tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjv6_i5tk"/>`,
		"fallback": "token:rss3",
	});
}

export default Component;
