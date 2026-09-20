import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8ab39bdu.css';
import '../../css/h/h8sbrtb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8ab39bdu"/><path class="h8sbrtb4n"/></g>`,
		"fallback": "solar:stars-bold-duotone",
	});
}

export default Component;
