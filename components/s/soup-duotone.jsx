import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgk69bbyd.css';
import '../../css/j/jfeew-8an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bgk69bbyd secondary"/><path class="jfeew-8an primary"/></g>`,
		"fallback": "iconaut:soup-duotone",
	});
}

export default Component;
