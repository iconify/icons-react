import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky42f-b-v.css';
import '../../css/h/hwhvgxbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ky42f-b-v"/><path clip-rule="evenodd" class="hwhvgxbaj"/></g>`,
		"fallback": "keyline-icons:paper-bag-sharp-duotone",
	});
}

export default Component;
