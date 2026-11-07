import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lq7nc17nr.css';
import '../../css/p/px3i7t95o.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lq7nc17nr"/><path class="px3i7t95o"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "solar:translation-broken",
	});
}

export default Component;
