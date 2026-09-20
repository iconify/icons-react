import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x9f9yfbbu.css';
import '../../css/p/pm5sxhcqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x9f9yfbbu"/><path class="pm5sxhcqs"/></g>`,
		"fallback": "solar:volleyball-broken",
	});
}

export default Component;
