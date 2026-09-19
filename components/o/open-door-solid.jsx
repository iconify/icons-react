import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_r5g1gmo.css';
import '../../css/a/alvqm6bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c_r5g1gmo"/><path clip-rule="evenodd" class="alvqm6bnq"/></g>`,
		"fallback": "flowbite:open-door-solid",
	});
}

export default Component;
