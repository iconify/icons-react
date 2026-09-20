import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ay1qmvbxn.css';
import '../../css/y/yuarp4b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ay1qmvbxn"/><path clip-rule="evenodd" class="yuarp4b7r"/></g>`,
		"fallback": "solar:sleeping-circle-outline",
	});
}

export default Component;
