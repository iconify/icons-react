import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhq7f1b7g.css';
import '../../css/m/mswf1b2xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bhq7f1b7g"/><path class="mswf1b2xt"/></g>`,
		"fallback": "reicon:mask-sad-duotone",
	});
}

export default Component;
