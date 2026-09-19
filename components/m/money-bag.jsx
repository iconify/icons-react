import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sf1jevb9v.css';
import '../../css/s/sqv8k3-tw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sf1jevb9v"/><path class="sqv8k3-tw"/></g>`,
		"fallback": "si-glyph:money-bag",
	});
}

export default Component;
