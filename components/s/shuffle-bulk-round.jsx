import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9zppubsu.css';
import '../../css/x/xcsyzkn5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9zppubsu"/><path class="xcsyzkn5w"/></g>`,
		"fallback": "coolicons:shuffle-bulk-round",
	});
}

export default Component;
