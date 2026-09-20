import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chbywo4xx.css';
import '../../css/p/pj4t1lmvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chbywo4xx"/><path clip-rule="evenodd" class="pj4t1lmvm"/></g>`,
		"fallback": "reicon:parking-filled",
	});
}

export default Component;
