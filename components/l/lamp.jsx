import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f7r14jrkz.css';
import '../../css/n/nrz23rewk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f7r14jrkz"/><path class="nrz23rewk"/></g>`,
		"fallback": "bi:lamp",
	});
}

export default Component;
