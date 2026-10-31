import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev_5b6boc.css';
import '../../css/s/ss3d290uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev_5b6boc"/><path class="ss3d290uf"/></g>`,
		"fallback": "coolicons:remove-formatting-bulk-round",
	});
}

export default Component;
