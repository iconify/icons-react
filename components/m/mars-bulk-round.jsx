import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb73dcc1r.css';
import '../../css/n/n36qpwqix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wb73dcc1r"/><path class="n36qpwqix"/></g>`,
		"fallback": "coolicons:mars-bulk-round",
	});
}

export default Component;
