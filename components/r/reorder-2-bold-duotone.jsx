import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uws124flx.css';
import '../../css/q/qg7npcbwy.css';
import '../../css/f/fbt278snz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="uws124flx"/><path class="qg7npcbwy"/></g><path class="fbt278snz"/></g>`,
		"fallback": "solar:reorder-2-bold-duotone",
	});
}

export default Component;
