import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bv6jtq8pn.css';
import '../../css/q/qfu6s86-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bv6jtq8pn"/><path class="qfu6s86-e"/></g>`,
		"fallback": "solar:square-arrow-left-up-bold-duotone",
	});
}

export default Component;
