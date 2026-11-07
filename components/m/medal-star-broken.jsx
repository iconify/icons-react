import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j8ful4bxb.css';
import '../../css/r/ryhgqrraa.css';
import '../../css/v/v7q1lwidl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j8ful4bxb"/><path class="ryhgqrraa"/><path class="v7q1lwidl"/></g>`,
		"fallback": "solar:medal-star-broken",
	});
}

export default Component;
