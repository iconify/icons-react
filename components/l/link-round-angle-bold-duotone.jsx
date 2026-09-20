import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gleqrmb3k.css';
import '../../css/g/gvtq7l7uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gleqrmb3k"/><path class="gvtq7l7uo"/></g>`,
		"fallback": "solar:link-round-angle-bold-duotone",
	});
}

export default Component;
