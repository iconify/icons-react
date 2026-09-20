import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/i/ivh9cup-t.css';
import '../../css/m/m43n7c4en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="ivh9cup-t"/><path class="m43n7c4en"/></g>`,
		"fallback": "mynaui:user-octagon-solid",
	});
}

export default Component;
