import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl1s5fhyb.css';
import '../../css/i/i-lgrsq3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cl1s5fhyb secondary"/><path class="i-lgrsq3l primary"/></g>`,
		"fallback": "iconaut:tablets-duotone",
	});
}

export default Component;
