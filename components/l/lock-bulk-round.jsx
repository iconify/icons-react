import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib0p0hbcr.css';
import '../../css/y/ywbu_jj9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ib0p0hbcr"/><path class="ywbu_jj9f"/></g>`,
		"fallback": "coolicons:lock-bulk-round",
	});
}

export default Component;
