import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p82yzhump.css';
import '../../css/e/efyt3acxm.css';
import '../../css/l/l1vnaybdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p82yzhump"/><path class="efyt3acxm"/><path class="l1vnaybdh"/></g>`,
		"fallback": "solar:satellite-broken",
	});
}

export default Component;
