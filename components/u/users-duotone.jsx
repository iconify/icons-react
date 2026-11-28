import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t4a-9xqik.css';
import '../../css/z/zuyy17_8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t4a-9xqik"/><path class="primary zuyy17_8p"/></g>`,
		"fallback": "iconaut:users-duotone",
	});
}

export default Component;
