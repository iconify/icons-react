import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u14xlx0oj.css';
import '../../css/u/upvp15d9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u14xlx0oj"/><path class="upvp15d9x"/></g>`,
		"fallback": "solar:shield-check-broken",
	});
}

export default Component;
