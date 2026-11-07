import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i96tnwb9m.css';
import '../../css/n/n9n4_cako.css';
import '../../css/o/oi_mcozlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i96tnwb9m"/><path class="n9n4_cako"/><path class="oi_mcozlx"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-broken",
	});
}

export default Component;
