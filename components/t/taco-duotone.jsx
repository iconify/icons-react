import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rahb95fwz.css';
import '../../css/k/klsw5mbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rahb95fwz secondary"/><path class="klsw5mbsb primary"/></g>`,
		"fallback": "iconaut:taco-duotone",
	});
}

export default Component;
