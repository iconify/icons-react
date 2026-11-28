import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_xi3ybdp.css';
import '../../css/y/yuu0t7b4c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_xi3ybdp"/><path class="yuu0t7b4c"/></g>`,
		"fallback": "pullo:rock-duotone",
	});
}

export default Component;
