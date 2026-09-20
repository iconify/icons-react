import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wnai51b8e.css';
import '../../css/j/joyk_zv2b.css';
import '../../css/k/k9825nbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wnai51b8e"/><path class="joyk_zv2b"/><path clip-rule="evenodd" class="k9825nbyc"/></g>`,
		"fallback": "solar:minimize-square-minimalistic-outline",
	});
}

export default Component;
