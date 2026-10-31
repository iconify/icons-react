import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oln7ajmrv.css';
import '../../css/i/ik13q-bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oln7ajmrv"/><path class="ik13q-bgm"/></g>`,
		"fallback": "coolicons:tree-pine-bulk-round",
	});
}

export default Component;
