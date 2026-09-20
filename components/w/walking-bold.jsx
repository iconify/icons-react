import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5twjj9fm.css';
import '../../css/b/b44k2cboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5twjj9fm"/><path clip-rule="evenodd" class="b44k2cboy"/></g>`,
		"fallback": "solar:walking-bold",
	});
}

export default Component;
