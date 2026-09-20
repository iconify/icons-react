import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xno7nkb6h.css';
import '../../css/t/t_fl2pbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xno7nkb6h"/><path clip-rule="evenodd" class="t_fl2pbxn"/></g>`,
		"fallback": "solar:like-bold-duotone",
	});
}

export default Component;
