import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv2gvylve.css';
import '../../css/f/fw8-r0bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yv2gvylve"/><path clip-rule="evenodd" class="fw8-r0bua"/></g>`,
		"fallback": "keyline-icons:wallet-cards-sharp-duotone",
	});
}

export default Component;
