import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/egg57x-vu.css';
import '../../css/f/fmxluu0lj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="egg57x-vu"/><path class="fmxluu0lj"/></g>`,
		"fallback": "fad:random-1dice",
	});
}

export default Component;
