import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c29g_nyys.css';
import '../../css/x/xx5tgjybo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c29g_nyys"/><path class="xx5tgjybo"/></g>`,
		"fallback": "solar:plane-2-bold-duotone",
	});
}

export default Component;
