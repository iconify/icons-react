import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c7nnx_bxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polyline points="7.25 14.25 2.75 14.25 2.75 1.75 13.25 1.75 13.25 9.25"/><path class="c7nnx_bxk"/></g>`,
		"fallback": "charm:notes-tick",
	});
}

export default Component;
