import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4jq0ycdy.css';
import '../../css/h/h1q94_bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4jq0ycdy"/><path class="h1q94_bbg"/></g>`,
		"fallback": "solar:square-forward-broken",
	});
}

export default Component;
