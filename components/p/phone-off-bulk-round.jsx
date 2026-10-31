import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gx06_gkaa.css';
import '../../css/s/s6450lbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gx06_gkaa"/><path class="s6450lbyw"/></g>`,
		"fallback": "coolicons:phone-off-bulk-round",
	});
}

export default Component;
