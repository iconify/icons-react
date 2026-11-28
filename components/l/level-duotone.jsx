import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-eo1bbff.css';
import '../../css/q/qlvz4tb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m-eo1bbff secondary"/><path class="primary qlvz4tb9s"/></g>`,
		"fallback": "iconaut:level-duotone",
	});
}

export default Component;
