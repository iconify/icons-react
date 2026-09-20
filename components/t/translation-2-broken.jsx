import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggb7x-boh.css';
import '../../css/l/ldty1h41z.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/j/jtil8bcce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ggb7x-boh"/><path class="ldty1h41z"/><circle class="h_tsn8bxt"/><path class="jtil8bcce"/></g>`,
		"fallback": "solar:translation-2-broken",
	});
}

export default Component;
