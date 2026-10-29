import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jl_cedxae.css';
import '../../css/r/r55ugqb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jl_cedxae"/><path class="r55ugqb8d wm-s"/></g>`,
		"fallback": "withicons:phone-call-solid",
	});
}

export default Component;
