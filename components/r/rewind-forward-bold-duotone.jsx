import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zykl4dbmt.css';
import '../../css/j/j4m7nktuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zykl4dbmt"/><path class="j4m7nktuv"/></g>`,
		"fallback": "solar:rewind-forward-bold-duotone",
	});
}

export default Component;
