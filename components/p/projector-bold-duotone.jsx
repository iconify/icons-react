import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i04qd9myb.css';
import '../../css/h/hmxp7xylf.css';
import '../../css/l/l0durob0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i04qd9myb"/><path class="hmxp7xylf"/><path class="l0durob0z"/></g>`,
		"fallback": "solar:projector-bold-duotone",
	});
}

export default Component;
