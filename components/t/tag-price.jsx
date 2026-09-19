import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/ziqr8ab8j.css';
import '../../css/q/qg7-5gleb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ziqr8ab8j"/><path class="qg7-5gleb"/></g>`,
		"fallback": "si-glyph:tag-price",
	});
}

export default Component;
