import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uleornbnd.css';
import '../../css/d/di82dublh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uleornbnd"/><path class="di82dublh"/></g>`,
		"fallback": "solar:star-rainbow-broken",
	});
}

export default Component;
