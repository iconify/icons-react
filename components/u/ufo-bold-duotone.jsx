import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kd2dfudas.css';
import '../../css/a/aq5sfutxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kd2dfudas"/><path class="aq5sfutxy"/></g>`,
		"fallback": "solar:ufo-bold-duotone",
	});
}

export default Component;
