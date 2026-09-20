import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e37fadcuc.css';
import '../../css/u/unmqxx9ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e37fadcuc"/><path clip-rule="evenodd" class="unmqxx9ca"/></g>`,
		"fallback": "reicon:safe-circle-filled",
	});
}

export default Component;
