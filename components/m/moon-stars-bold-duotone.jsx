import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjvhwgq2h.css';
import '../../css/h/h-w6sbb4t.css';
import '../../css/t/ton5smgkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjvhwgq2h"/><path class="h-w6sbb4t"/><path class="ton5smgkd"/></g>`,
		"fallback": "solar:moon-stars-bold-duotone",
	});
}

export default Component;
