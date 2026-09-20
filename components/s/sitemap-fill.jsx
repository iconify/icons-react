import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy7xfdg8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fy7xfdg8b"/>`,
		"fallback": "mingcute:sitemap-fill",
	});
}

export default Component;
