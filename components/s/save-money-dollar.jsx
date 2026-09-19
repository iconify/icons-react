import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvpjlb97s.css';
import '../../css/y/y9-kljbny.css';
import '../../css/j/j7k2ckmjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvpjlb97s"/><path class="y9-kljbny"/><path class="j7k2ckmjp"/></g>`,
		"fallback": "hugeicons:save-money-dollar",
	});
}

export default Component;
