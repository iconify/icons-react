import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iqx3xpfuf.css';
import '../../css/p/p9ckdsbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iqx3xpfuf"/><path class="p9ckdsbhd"/></g>`,
		"fallback": "solar:pie-chart-2-broken",
	});
}

export default Component;
