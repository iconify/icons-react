import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qprzy2b6i.css';
import '../../css/c/cd0mvwk9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qprzy2b6i"/><path class="cd0mvwk9m"/></g>`,
		"fallback": "solar:square-share-line-broken",
	});
}

export default Component;
