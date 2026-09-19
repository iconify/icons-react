import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8n4tgbef.css';
import '../../css/h/h_mcfnb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t8n4tgbef"/><path class="h_mcfnb8k"/></g>`,
		"fallback": "flowbite:moon-plus-solid",
	});
}

export default Component;
