import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4zbt7jox.css';
import '../../css/w/w6nga9b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4zbt7jox"/><path clip-rule="evenodd" class="w6nga9b2a"/></g>`,
		"fallback": "solar:rounded-magnifier-check-bold",
	});
}

export default Component;
