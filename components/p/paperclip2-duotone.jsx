import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/maakx_o1z.css';
import '../../css/t/twrm7hsrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="maakx_o1z"/><path class="twrm7hsrm"/></g>`,
		"fallback": "reicon:paperclip2-duotone",
	});
}

export default Component;
