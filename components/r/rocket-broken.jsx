import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/omvizacjo.css';
import '../../css/k/k6knkcfzc.css';
import '../../css/c/c-9ps4isn.css';
import '../../css/t/tangbccak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="omvizacjo"/><path class="k6knkcfzc"/><path class="c-9ps4isn"/><path class="tangbccak"/></g>`,
		"fallback": "solar:rocket-broken",
	});
}

export default Component;
