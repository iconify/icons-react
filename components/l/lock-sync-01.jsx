import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjrk_3fyr.css';
import '../../css/i/iuilbobsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xjrk_3fyr"/><path class="iuilbobsr"/></g>`,
		"fallback": "hugeicons:lock-sync-01",
	});
}

export default Component;
