import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfkm-pqti.css';
import '../../css/e/esqgvy60g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gfkm-pqti"/><path class="esqgvy60g"/></g>`,
		"fallback": "flowbite:linkedin-solid",
	});
}

export default Component;
