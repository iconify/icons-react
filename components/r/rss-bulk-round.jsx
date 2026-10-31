import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5mohccar.css';
import '../../css/d/dlg8848lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u5mohccar"/><path class="dlg8848lc"/></g>`,
		"fallback": "coolicons:rss-bulk-round",
	});
}

export default Component;
