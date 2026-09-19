import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/he3th9n-g.css';
import '../../css/w/w32dl-bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="he3th9n-g"/><path class="w32dl-bcb"/></g>`,
		"fallback": "hugeicons:jogger-pants",
	});
}

export default Component;
