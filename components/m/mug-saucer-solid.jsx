import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_x2pdntp.css';
import '../../css/p/pjw2ekr2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r_x2pdntp"/><path class="pjw2ekr2k"/></g>`,
		"fallback": "flowbite:mug-saucer-solid",
	});
}

export default Component;
