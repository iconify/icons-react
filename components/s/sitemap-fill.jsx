import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weit_7t1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weit_7t1l"/>`,
		"fallback": "mingcute:sitemap-fill",
	});
}

export default Component;
