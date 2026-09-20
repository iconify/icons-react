import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k0k2z8awb.css';
import '../../css/a/adlaw-b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k0k2z8awb"/><path class="adlaw-b6t"/></g>`,
		"fallback": "solar:sim-card-broken",
	});
}

export default Component;
