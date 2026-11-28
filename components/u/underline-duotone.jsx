import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbj1-15cl.css';
import '../../css/l/lzb9u4btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dbj1-15cl secondary"/><path class="lzb9u4btp primary"/></g>`,
		"fallback": "iconaut:underline-duotone",
	});
}

export default Component;
