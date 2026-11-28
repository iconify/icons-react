import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/veihzfb8k.css';
import '../../css/r/rexkp5y4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary veihzfb8k"/><path class="primary rexkp5y4h"/></g>`,
		"fallback": "iconaut:user-cog-duotone",
	});
}

export default Component;
