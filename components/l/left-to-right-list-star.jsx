import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x4qic3kog.css';
import '../../css/y/y8od86bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x4qic3kog"/><path class="y8od86bqu"/></g>`,
		"fallback": "hugeicons:left-to-right-list-star",
	});
}

export default Component;
