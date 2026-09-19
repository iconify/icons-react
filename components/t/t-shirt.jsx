import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1d9gzssy.css';
import '../../css/w/wthtsqq1n.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a1d9gzssy"/><path class="wthtsqq1n"/></g>`,
		"fallback": "si-glyph:t-shirt",
	});
}

export default Component;
