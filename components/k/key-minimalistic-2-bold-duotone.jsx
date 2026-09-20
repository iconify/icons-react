import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smd9o5b5z.css';
import '../../css/t/tb0lnj0fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="smd9o5b5z"/><path class="tb0lnj0fu"/></g>`,
		"fallback": "solar:key-minimalistic-2-bold-duotone",
	});
}

export default Component;
