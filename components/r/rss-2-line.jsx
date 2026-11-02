import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-8d71q8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-8d71q8c"/>`,
		"fallback": "mingcute:rss-2-line",
	});
}

export default Component;
