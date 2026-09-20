import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4q316roj.css';
import '../../css/u/uw6indbog.css';
import '../../css/x/xvqdltb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4q316roj"/><path class="uw6indbog"/><path class="xvqdltb2j"/></g>`,
		"fallback": "solar:lightbulb-linear",
	});
}

export default Component;
