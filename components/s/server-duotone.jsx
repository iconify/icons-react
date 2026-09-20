import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jio5u2gqr.css';
import '../../css/b/b28tj_i5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jio5u2gqr"/><path class="b28tj_i5e"/></g>`,
		"fallback": "keyline-icons:server-duotone",
	});
}

export default Component;
