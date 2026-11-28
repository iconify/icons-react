import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk1ai1w-y.css';
import '../../css/q/q54v-xdop.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk1ai1w-y"/><path class="q54v-xdop"/></g>`,
		"fallback": "pullo:user-slash-duotone",
	});
}

export default Component;
