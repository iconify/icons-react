import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ap1dh0bks.css';
import '../../css/c/cp4ndvb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ap1dh0bks"/><path class="cp4ndvb0z"/></g>`,
		"fallback": "solar:plane-2-broken",
	});
}

export default Component;
