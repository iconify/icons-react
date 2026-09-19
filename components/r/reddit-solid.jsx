import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtba_comf.css';
import '../../css/g/g9oozz2sw.css';
import '../../css/s/swq3r6bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qtba_comf"/><path clip-rule="evenodd" class="g9oozz2sw"/><path class="swq3r6bzr"/></g>`,
		"fallback": "flowbite:reddit-solid",
	});
}

export default Component;
