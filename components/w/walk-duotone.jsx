import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw8b6cfgr.css';
import '../../css/x/xk2laibje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bw8b6cfgr"/><path class="xk2laibje"/></g>`,
		"fallback": "reicon:walk-duotone",
	});
}

export default Component;
