import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odswgmbkn.css';
import '../../css/t/tqw6jwqgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="odswgmbkn"/><path class="tqw6jwqgd"/></g>`,
		"fallback": "solar:text-bold-bold-duotone",
	});
}

export default Component;
