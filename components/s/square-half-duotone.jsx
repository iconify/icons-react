import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz28tybvv.css';
import '../../css/f/fq8ce1b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jz28tybvv"/><path class="fq8ce1b2j"/></g>`,
		"fallback": "keyline-icons:square-half-duotone",
	});
}

export default Component;
