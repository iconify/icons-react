import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0u3qtbzv.css';
import '../../css/u/upvp15d9x.css';
import '../../css/w/war5z0bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0u3qtbzv"/><path class="upvp15d9x"/><path class="war5z0bki"/></g>`,
		"fallback": "solar:shield-warning-broken",
	});
}

export default Component;
