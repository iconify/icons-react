import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q889o1jwv.css';
import '../../css/p/pijyxccjh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q889o1jwv"/><path class="pijyxccjh"/></g>`,
		"fallback": "si-glyph:umberlla-chair",
	});
}

export default Component;
