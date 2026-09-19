import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzp_1zb0u.css';
import '../../css/k/k3b8yu03p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzp_1zb0u"/><path class="k3b8yu03p"/></g>`,
		"fallback": "gg:move-right",
	});
}

export default Component;
