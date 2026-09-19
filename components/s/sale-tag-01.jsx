import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a07s13bxo.css';
import '../../css/q/qc1ru30_a.css';
import '../../css/s/sk8x0nbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a07s13bxo"/><path class="qc1ru30_a"/><path class="sk8x0nbms"/></g>`,
		"fallback": "hugeicons:sale-tag-01",
	});
}

export default Component;
