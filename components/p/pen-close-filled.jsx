import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3mvgkbqm.css';
import '../../css/x/xq7--obox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3mvgkbqm"/><path class="xq7--obox"/></g>`,
		"fallback": "reicon:pen-close-filled",
	});
}

export default Component;
