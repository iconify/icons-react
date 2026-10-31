import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bism5xbjj.css';
import '../../css/d/dyf-03b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bism5xbjj"/><path class="dyf-03b4c"/></g>`,
		"fallback": "coolicons:twitch-bulk-round",
	});
}

export default Component;
