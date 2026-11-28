import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6g9lcbgc.css';
import '../../css/p/p3qnk6m6n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6g9lcbgc"/><path class="p3qnk6m6n"/></g>`,
		"fallback": "pullo:sidebar-simple-close-duotone",
	});
}

export default Component;
