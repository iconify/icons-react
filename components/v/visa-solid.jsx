import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7wpunw6b.css';
import '../../css/d/d4__7jb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7wpunw6b"/><path clip-rule="evenodd" class="d4__7jb8j"/></g>`,
		"fallback": "flowbite:visa-solid",
	});
}

export default Component;
