import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3kxm-bqm.css';
import '../../css/a/ayl4v-bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3kxm-bqm"/><path class="ayl4v-bwc"/></g>`,
		"fallback": "hugeicons:mining-01",
	});
}

export default Component;
