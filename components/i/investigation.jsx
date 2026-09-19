import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pla2dab5a.css';
import '../../css/b/bkn4clyuz.css';
import '../../css/x/xj-p88xil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pla2dab5a"/><path class="bkn4clyuz"/><path class="xj-p88xil"/></g>`,
		"fallback": "hugeicons:investigation",
	});
}

export default Component;
