import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0-3xybun.css';
import '../../css/q/q1otv9jnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v0-3xybun"/><path class="q1otv9jnf"/></g>`,
		"fallback": "solar:ladle-broken",
	});
}

export default Component;
