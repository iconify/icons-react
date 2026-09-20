import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lr3oqwb_k.css';
import '../../css/t/thsdn8btu.css';
import '../../css/j/jpuzw0btv.css';
import '../../css/q/q4xil6tti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="lr3oqwb_k"/><path class="thsdn8btu"/><path class="jpuzw0btv"/><path class="q4xil6tti"/></g>`,
		"fallback": "streamline-cyber:new-document-layer",
	});
}

export default Component;
