import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmymti-fw.css';
import '../../css/z/z1mo_3bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmymti-fw secondary"/><path class="primary z1mo_3bcp"/></g>`,
		"fallback": "iconaut:oven-duotone",
	});
}

export default Component;
