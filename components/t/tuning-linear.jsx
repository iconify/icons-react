import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0arut6ax.css';
import '../../css/e/e66wveb3k.css';
import '../../css/b/bvwq-0kiq.css';
import '../../css/i/itr5k-b-e.css';
import '../../css/h/htq9jdyaq.css';
import '../../css/n/ny4-c4djh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y0arut6ax"/><path class="e66wveb3k"/><path class="bvwq-0kiq"/><path class="itr5k-b-e"/><path class="htq9jdyaq"/><path class="ny4-c4djh"/></g>`,
		"fallback": "solar:tuning-linear",
	});
}

export default Component;
