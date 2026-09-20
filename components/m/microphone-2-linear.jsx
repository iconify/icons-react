import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/x/x-22ajbkr.css';
import '../../css/z/zqljambho.css';
import '../../css/f/fpr1n1b3q.css';
import '../../css/a/abaosiy3n.css';
import '../../css/u/ujrmgmblc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="x-22ajbkr"/><path class="zqljambho"/><path class="fpr1n1b3q"/><path class="abaosiy3n"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:microphone-2-linear",
	});
}

export default Component;
