import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t37cpkbel.css';
import '../../css/w/w17eqfq2x.css';
import '../../css/i/i6q2iqb1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="t37cpkbel"/><path class="w17eqfq2x"/><path class="i6q2iqb1d"/></g>`,
		"fallback": "cryptocurrency-color:ubq",
	});
}

export default Component;
