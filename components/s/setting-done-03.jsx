import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zqbtg_noo.css';
import '../../css/k/kis3z9bum.css';
import '../../css/s/sg3by7iou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zqbtg_noo"/><path class="kis3z9bum"/><path class="sg3by7iou"/></g>`,
		"fallback": "hugeicons:setting-done-03",
	});
}

export default Component;
