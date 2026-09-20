import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi-03_b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi-03_b6r"/>`,
		"fallback": "typcn:rss-outline",
	});
}

export default Component;
