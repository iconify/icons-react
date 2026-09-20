import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i626vjbuh.css';
import '../../css/e/ecwgwqbhc.css';
import '../../css/h/hrqohn1pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i626vjbuh"/><path class="ecwgwqbhc"/><path class="hrqohn1pc"/></g>`,
		"fallback": "solar:laptop-broken",
	});
}

export default Component;
