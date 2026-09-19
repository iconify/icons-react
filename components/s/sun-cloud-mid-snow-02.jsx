import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vwuu4y16d.css';
import '../../css/x/x3xz6cc_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vwuu4y16d"/><path class="x3xz6cc_v"/></g>`,
		"fallback": "hugeicons:sun-cloud-mid-snow-02",
	});
}

export default Component;
