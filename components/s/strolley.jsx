import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2-f6o6kv.css';
import '../../css/k/kdbnk1p6s.css';
import '../../css/b/bxgre1bwl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="l2-f6o6kv"/><ellipse class="kdbnk1p6s"/><path class="bxgre1bwl"/></g>`,
		"fallback": "si-glyph:strolley",
	});
}

export default Component;
