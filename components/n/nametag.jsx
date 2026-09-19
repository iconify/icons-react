import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_befb1g.css';
import '../../css/x/xqt-kufwm.css';
import '../../css/l/l5q6pxbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij_befb1g"/><path clip-rule="evenodd" class="xqt-kufwm"/><path class="l5q6pxbzs"/></g>`,
		"fallback": "gg:nametag",
	});
}

export default Component;
