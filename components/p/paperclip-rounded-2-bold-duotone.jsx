import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bv6jtq8pn.css';
import '../../css/f/f3d_0fuol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bv6jtq8pn"/><path class="f3d_0fuol"/></g>`,
		"fallback": "solar:paperclip-rounded-2-bold-duotone",
	});
}

export default Component;
