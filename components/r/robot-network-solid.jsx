import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efn7vhmsx.css';
import '../../css/e/erbeg4bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efn7vhmsx"/><path class="erbeg4bwa"/></g>`,
		"fallback": "iconaut:robot-network-solid",
	});
}

export default Component;
