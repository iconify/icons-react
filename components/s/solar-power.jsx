import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l2rvtoxlz.css';
import '../../css/t/t43vemb6k.css';
import '../../css/u/u4agv6btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l2rvtoxlz"/><path class="t43vemb6k"/><path class="u4agv6btr"/></g>`,
		"fallback": "hugeicons:solar-power",
	});
}

export default Component;
