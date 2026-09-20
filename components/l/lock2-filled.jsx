import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5hs_lb5u.css';
import '../../css/z/zr061hb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5hs_lb5u"/><path class="zr061hb9m"/></g>`,
		"fallback": "reicon:lock2-filled",
	});
}

export default Component;
