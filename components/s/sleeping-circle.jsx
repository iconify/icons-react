import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jh_x44bub.css';
import '../../css/i/id90g3ano.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jh_x44bub"/><path clip-rule="evenodd" class="id90g3ano"/></g>`,
		"fallback": "reicon:sleeping-circle",
	});
}

export default Component;
