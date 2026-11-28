import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6g9lcbgc.css';
import '../../css/x/x9g0x-bcn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6g9lcbgc"/><path class="x9g0x-bcn"/></g>`,
		"fallback": "pullo:sidebar-simple-open-duotone",
	});
}

export default Component;
