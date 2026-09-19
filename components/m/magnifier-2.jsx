import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qhoyut78y.css';
import '../../css/w/wjv4j4b_i.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qhoyut78y"/><path class="wjv4j4b_i"/></g>`,
		"fallback": "si-glyph:magnifier-2",
	});
}

export default Component;
