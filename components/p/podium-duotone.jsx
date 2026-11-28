import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nil16o7ae.css';
import '../../css/k/kbxaioqna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nil16o7ae secondary"/><path class="kbxaioqna primary"/></g>`,
		"fallback": "iconaut:podium-duotone",
	});
}

export default Component;
