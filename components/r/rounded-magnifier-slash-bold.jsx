import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4zbt7jox.css';
import '../../css/s/s7knryb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4zbt7jox"/><path clip-rule="evenodd" class="s7knryb6s"/></g>`,
		"fallback": "solar:rounded-magnifier-slash-bold",
	});
}

export default Component;
