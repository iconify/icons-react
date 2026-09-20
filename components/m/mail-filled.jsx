import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdxejchgi.css';
import '../../css/u/u0av0nb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdxejchgi"/><path class="u0av0nb1u"/></g>`,
		"fallback": "tabler:mail-filled",
	});
}

export default Component;
