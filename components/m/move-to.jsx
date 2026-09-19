import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2cpkrb0m.css';
import '../../css/k/kdmio7boq.css';
import '../../css/e/esyo-ccry.css';
import '../../css/z/zizb71zos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e2cpkrb0m"/><path class="kdmio7boq"/><path class="esyo-ccry"/><path class="zizb71zos"/></g>`,
		"fallback": "hugeicons:move-to",
	});
}

export default Component;
