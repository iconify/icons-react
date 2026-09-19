import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sakveibvn.css';
import '../../css/k/kew7m7bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sakveibvn"/><path class="kew7m7bxs"/></g>`,
		"fallback": "hugeicons:shirt-01",
	});
}

export default Component;
