import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwvy5p-_w.css';
import '../../css/l/lrv276qwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uwvy5p-_w"/><path class="lrv276qwq"/></g>`,
		"fallback": "coolicons:laptop-bulk-round",
	});
}

export default Component;
