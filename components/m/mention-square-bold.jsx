import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7di6wbmv.css';
import '../../css/f/fsh22sfgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v7di6wbmv"/><path clip-rule="evenodd" class="fsh22sfgv"/></g>`,
		"fallback": "solar:mention-square-bold",
	});
}

export default Component;
