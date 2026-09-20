import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvoecyb6c.css';
import '../../css/m/mhxymalnj.css';
import '../../css/t/teg2gbcuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lvoecyb6c"/><path class="mhxymalnj"/><path class="teg2gbcuk"/></g>`,
		"fallback": "reicon:masks-duotone",
	});
}

export default Component;
