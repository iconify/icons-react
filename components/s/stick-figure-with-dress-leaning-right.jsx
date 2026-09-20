import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t91hoq76b.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/k/k42anccuv.css';
import '../../css/y/yx6lpcbwf.css';
import '../../css/p/p677f4nho.css';
import '../../css/i/i7eycfb2w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t91hoq76b"/><g class="brzn_0bpr"><path class="k42anccuv"/><path class="yx6lpcbwf"/><path class="p677f4nho"/><circle class="i7eycfb2w"/></g>`,
		"fallback": "openmoji:stick-figure-with-dress-leaning-right",
	});
}

export default Component;
