import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7ph6ebna.css';
import '../../css/t/truwibb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h7ph6ebna"/><path class="truwibb1p"/></g>`,
		"fallback": "iconamoon:shield-duotone",
	});
}

export default Component;
