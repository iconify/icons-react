import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zt-xmrb_v.css';
import '../../css/u/uinxxibir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zt-xmrb_v"/><path class="primary uinxxibir"/></g>`,
		"fallback": "iconaut:saw-duotone",
	});
}

export default Component;
