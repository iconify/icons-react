import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jup8nimrm.css';
import '../../css/t/tnu8wrbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jup8nimrm secondary"/><path class="primary tnu8wrbbz"/></g>`,
		"fallback": "iconaut:subscription-duotone",
	});
}

export default Component;
