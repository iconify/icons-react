import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmw3j9v_l.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/ed016ybbg.css';
import '../../css/y/yswxml9zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wmw3j9v_l"/><g class="mc2zb0bvp"><path class="ed016ybbg"/><path class="yswxml9zk"/></g></g>`,
		"fallback": "solar:walking-round-bold-duotone",
	});
}

export default Component;
