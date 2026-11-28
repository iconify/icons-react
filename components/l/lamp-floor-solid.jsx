import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugyml1s8n.css';
import '../../css/g/gyqjocbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ugyml1s8n"/><path class="gyqjocbew"/></g>`,
		"fallback": "iconaut:lamp-floor-solid",
	});
}

export default Component;
