import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lrt47ubkv.css';
import '../../css/x/xyzg1lbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lrt47ubkv secondary"/><path class="primary xyzg1lbdn"/></g>`,
		"fallback": "iconaut:slice-duotone",
	});
}

export default Component;
