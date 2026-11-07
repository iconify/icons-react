import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrobosv7g.css';
import '../../css/v/v-y89qb7a.css';
import '../../css/i/ij7wzu9ga.css';
import '../../css/o/ohlnn7bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mrobosv7g"/><path class="v-y89qb7a"/><path class="ij7wzu9ga"/><path class="ohlnn7bxo"/></g>`,
		"fallback": "solar:move-broken",
	});
}

export default Component;
