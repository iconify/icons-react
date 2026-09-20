import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2f46pp8y.css';
import '../../css/w/wvnthqrvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2f46pp8y"/><path class="wvnthqrvo"/></g>`,
		"fallback": "rivet-icons:question-mark",
	});
}

export default Component;
