import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3l9_i7xd.css';
import '../../css/o/ol78xkboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g3l9_i7xd"/><path class="ol78xkboo"/></g>`,
		"fallback": "reicon:phone-end2-duotone",
	});
}

export default Component;
