import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/txwri8bqr.css';
import '../../css/c/cxmrq_y6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="txwri8bqr"/><path class="cxmrq_y6k"/></g>`,
		"fallback": "cryptocurrency:ubq",
	});
}

export default Component;
