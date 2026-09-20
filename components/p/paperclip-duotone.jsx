import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gquijebcj.css';
import '../../css/g/g2dv8xa_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gquijebcj"/><path class="g2dv8xa_q"/></g>`,
		"fallback": "reicon:paperclip-duotone",
	});
}

export default Component;
