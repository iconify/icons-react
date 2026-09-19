import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/td81zzyxq.css';
import '../../css/i/i9m89s9zq.css';
import '../../css/z/zxp0ecb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="td81zzyxq"/><path class="i9m89s9zq"/><path class="zxp0ecb1d"/></g>`,
		"fallback": "hugeicons:map-pin-search",
	});
}

export default Component;
