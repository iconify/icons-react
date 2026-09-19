import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vitgwpa-f.css';
import '../../css/e/e3dh8ccwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vitgwpa-f"/><path clip-rule="evenodd" class="e3dh8ccwm"/></g>`,
		"fallback": "gg:play-list-search",
	});
}

export default Component;
