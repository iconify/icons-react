import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cg59p-bfm.css';
import '../../css/a/ah7medbjv.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cg59p-bfm"/><path class="ah7medbjv"/></g>`,
		"fallback": "jam:messages-alt-f",
	});
}

export default Component;
