import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/f/finz40bxj.css';
import '../../css/w/w9t7yvv_q.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="finz40bxj"/><path class="w9t7yvv_q"/></g>`,
		"fallback": "streamline-stickies-color:sun",
	});
}

export default Component;
