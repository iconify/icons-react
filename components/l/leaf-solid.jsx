import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae4ztyb8f.css';
import '../../css/b/bubv6h1qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ae4ztyb8f"/><path class="bubv6h1qu"/></g>`,
		"fallback": "mynaui:leaf-solid",
	});
}

export default Component;
