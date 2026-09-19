import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d4ojboz2j.css';
import '../../css/v/vm8sitqky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d4ojboz2j"/><path class="vm8sitqky"/></g>`,
		"fallback": "iconoir:spades",
	});
}

export default Component;
