import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyxm5bcmr.css';
import '../../css/v/vfh4pthiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hyxm5bcmr"/><path class="vfh4pthiv"/></g>`,
		"fallback": "flowbite:microphone-solid",
	});
}

export default Component;
