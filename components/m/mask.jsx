import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8hauoi6q.css';
import '../../css/i/i5_8b_byv.css';
import '../../css/p/pu0hdob-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t8hauoi6q"/><path class="i5_8b_byv"/><path class="pu0hdob-c"/></g>`,
		"fallback": "hugeicons:mask",
	});
}

export default Component;
