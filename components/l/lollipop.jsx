import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwo6qqb0d.css';
import '../../css/u/udv9s8b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="rwo6qqb0d"/><path class="udv9s8b_u"/></g>`,
		"fallback": "hugeicons:lollipop",
	});
}

export default Component;
