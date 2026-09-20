import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cfl5bztms.css';
import '../../css/i/i5ld2zbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cfl5bztms"/><path class="i5ld2zbfa"/></g>`,
		"fallback": "solar:square-top-down-bold",
	});
}

export default Component;
