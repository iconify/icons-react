import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/o/ojdk2obcb.css';
import '../../css/o/o8x1mgcwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="ojdk2obcb"/><path class="o8x1mgcwq"/></g>`,
		"fallback": "mynaui:user-diamond-solid",
	});
}

export default Component;
