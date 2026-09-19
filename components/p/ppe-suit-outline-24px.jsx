import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cp_clmbrk.css';
import '../../css/t/tesakuiiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cp_clmbrk"/><path clip-rule="evenodd" class="tesakuiiu"/></g>`,
		"fallback": "healthicons:ppe-suit-outline-24px",
	});
}

export default Component;
