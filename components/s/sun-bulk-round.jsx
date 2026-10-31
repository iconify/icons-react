import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9se1bbgx.css';
import '../../css/v/v4-qxiega.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9se1bbgx"/><path class="v4-qxiega"/></g>`,
		"fallback": "coolicons:sun-bulk-round",
	});
}

export default Component;
