import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f02vg2kgd.css';
import '../../css/c/c2g_1cb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f02vg2kgd"/><path clip-rule="evenodd" class="c2g_1cb5e"/></g>`,
		"fallback": "reicon:server3-duotone",
	});
}

export default Component;
