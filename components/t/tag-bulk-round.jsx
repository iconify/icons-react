import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rnjfrmbsq.css';
import '../../css/r/rzz27iuhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rnjfrmbsq"/><path class="rzz27iuhk"/></g>`,
		"fallback": "coolicons:tag-bulk-round",
	});
}

export default Component;
