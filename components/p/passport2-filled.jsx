import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvqxatmiy.css';
import '../../css/s/sg_is1bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nvqxatmiy"/><path clip-rule="evenodd" class="sg_is1bda"/></g>`,
		"fallback": "reicon:passport2-filled",
	});
}

export default Component;
