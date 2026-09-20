import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/orenz6bgo.css';
import '../../css/w/weie770iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="orenz6bgo"/><path clip-rule="evenodd" class="weie770iy"/></g>`,
		"fallback": "reicon:run-filled",
	});
}

export default Component;
