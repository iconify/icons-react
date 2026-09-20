import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyxy_pbkb.css';
import '../../css/v/v8a-6vb_q.css';
import '../../css/z/ziq71pbbd.css';
import '../../css/r/rfsjwnbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tyxy_pbkb"/><path class="v8a-6vb_q"/><path clip-rule="evenodd" class="ziq71pbbd"/><path class="rfsjwnbvg"/></g>`,
		"fallback": "solar:notification-lines-remove-bold-duotone",
	});
}

export default Component;
