import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwqktibxd.css';
import '../../css/x/x5jebj50z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwqktibxd secondary"/><path class="primary x5jebj50z"/></g>`,
		"fallback": "iconaut:safe-duotone",
	});
}

export default Component;
