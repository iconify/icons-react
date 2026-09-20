import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx0_8ybig.css';
import '../../css/m/ml86bdbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx0_8ybig"/><path clip-rule="evenodd" class="ml86bdbrb"/></g>`,
		"fallback": "nrk:target-solid-expressive",
	});
}

export default Component;
