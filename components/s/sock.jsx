import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l4ghmbc-g.css';
import '../../css/w/w1mxsqhwf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l4ghmbc-g"/><path class="w1mxsqhwf"/></g>`,
		"fallback": "si-glyph:sock",
	});
}

export default Component;
