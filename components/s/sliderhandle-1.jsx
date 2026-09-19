import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mi8c2hbtb.css';
import '../../css/o/ows1v5bvj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mi8c2hbtb"/><path class="ows1v5bvj"/></g>`,
		"fallback": "fad:sliderhandle-1",
	});
}

export default Component;
