import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fv32tefme.css';
import '../../css/p/pg0bkrbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fv32tefme"/><path class="pg0bkrbrv"/></g>`,
		"fallback": "iconaut:lock-keyhole-open-solid",
	});
}

export default Component;
