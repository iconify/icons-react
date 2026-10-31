import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efvf4pa8r.css';
import '../../css/n/nerdhbb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efvf4pa8r"/><path class="nerdhbb1y"/></g>`,
		"fallback": "coolicons:server-off-bulk-round",
	});
}

export default Component;
