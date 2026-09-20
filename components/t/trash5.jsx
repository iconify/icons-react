import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4ucz2uaw.css';
import '../../css/o/ocio42bgr.css';
import '../../css/t/t584fyapz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m4ucz2uaw"/><path class="ocio42bgr"/><path class="t584fyapz"/></g>`,
		"fallback": "reicon:trash5",
	});
}

export default Component;
