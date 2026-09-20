import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npxa2k15o.css';
import '../../css/z/zj19l_nqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npxa2k15o"/><path clip-rule="evenodd" class="zj19l_nqd"/></g>`,
		"fallback": "solar:shield-up-bold-duotone",
	});
}

export default Component;
