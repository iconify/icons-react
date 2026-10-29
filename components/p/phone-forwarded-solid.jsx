import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jl_cedxae.css';
import '../../css/j/j256vobyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jl_cedxae"/><path class="j256vobyq wm-s"/></g>`,
		"fallback": "withicons:phone-forwarded-solid",
	});
}

export default Component;
