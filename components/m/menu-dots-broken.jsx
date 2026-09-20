import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wlfgbb32o.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/n/n92ediatx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wlfgbb32o"/><circle class="h_tsn8bxt"/><path class="n92ediatx"/></g>`,
		"fallback": "solar:menu-dots-broken",
	});
}

export default Component;
