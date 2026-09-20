import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysq6vib9v.css';
import '../../css/m/m4fqi-uul.css';
import '../../css/b/bzx3ijjsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ysq6vib9v"/><path clip-rule="evenodd" class="m4fqi-uul"/><path class="bzx3ijjsf"/></g>`,
		"fallback": "reicon:sleeping-circle-duotone",
	});
}

export default Component;
