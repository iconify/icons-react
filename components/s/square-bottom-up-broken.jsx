import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kjp9wbcrw.css';
import '../../css/b/bhy-axcbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kjp9wbcrw"/><path class="bhy-axcbm"/></g>`,
		"fallback": "solar:square-bottom-up-broken",
	});
}

export default Component;
