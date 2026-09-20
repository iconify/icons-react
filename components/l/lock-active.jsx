import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z5kkujbuz.css';
import '../../css/t/t6fq8pwwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z5kkujbuz"/><path clip-rule="evenodd" class="t6fq8pwwf"/></g>`,
		"fallback": "nrk:lock-active",
	});
}

export default Component;
