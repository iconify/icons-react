import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzd90kxwz.css';
import '../../css/o/ockx9e_rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzd90kxwz"/><path class="ockx9e_rn"/></g>`,
		"fallback": "coolicons:package-plus-corner-bulk-round",
	});
}

export default Component;
