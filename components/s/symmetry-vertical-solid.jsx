import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iir_d-iti.css';
import '../../css/w/w-pfbgb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iir_d-iti"/><path class="w-pfbgb9l"/></g>`,
		"fallback": "iconaut:symmetry-vertical-solid",
	});
}

export default Component;
