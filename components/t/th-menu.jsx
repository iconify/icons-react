import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6zmte1wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6zmte1wl"/>`,
		"fallback": "typcn:th-menu",
	});
}

export default Component;
