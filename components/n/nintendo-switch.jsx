import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/int3fte0q.css';
import '../../css/q/qfnoy_0pk.css';
import '../../css/z/zm3nmuiva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="int3fte0q"/><path class="qfnoy_0pk"/><path class="zm3nmuiva"/></g>`,
		"fallback": "hugeicons:nintendo-switch",
	});
}

export default Component;
