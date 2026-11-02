import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aszda9b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aszda9b7v"/>`,
		"fallback": "mingcute:rss-fill",
	});
}

export default Component;
