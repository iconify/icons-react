import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hw6n_twng.css';
import '../../css/p/prckelbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hw6n_twng secondary"/><path class="prckelbwg primary"/></g>`,
		"fallback": "iconaut:sword-duotone",
	});
}

export default Component;
