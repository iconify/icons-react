import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u99l2yxgv.css';
import '../../css/z/z04drlb1l.css';
import '../../css/i/i650vrpib.css';
import '../../css/e/e0rq2fx8z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u99l2yxgv"/><g class="z04drlb1l"><path class="i650vrpib"/><path class="e0rq2fx8z"/></g>`,
		"fallback": "openmoji:sea-level-rise",
	});
}

export default Component;
