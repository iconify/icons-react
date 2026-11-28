import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iy-mjgtls.css';
import '../../css/i/ibhyikq-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iy-mjgtls secondary"/><path class="ibhyikq-o primary"/></g>`,
		"fallback": "iconaut:question-mark-duotone",
	});
}

export default Component;
