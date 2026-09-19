import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1rgjueje.css';
import '../../css/g/gdumllbcd.css';
import '../../css/o/oi_e6acli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1rgjueje"/><path clip-rule="evenodd" class="gdumllbcd"/><path class="oi_e6acli"/></g>`,
		"fallback": "flowbite:school-xmark-solid",
	});
}

export default Component;
