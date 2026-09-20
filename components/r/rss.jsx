import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux1onib1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux1onib1v"/>`,
		"fallback": "typcn:rss",
	});
}

export default Component;
