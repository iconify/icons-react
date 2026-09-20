import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acejusade.css';
import '../../css/y/y4qe-ubzy.css';
import '../../css/v/v7q1lwidl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="acejusade"/><path class="y4qe-ubzy"/><path class="v7q1lwidl"/></g>`,
		"fallback": "solar:medal-star-broken",
	});
}

export default Component;
