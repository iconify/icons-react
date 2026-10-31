import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lsxhw2bwk.css';
import '../../css/r/r9pi5jb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lsxhw2bwk"/><path class="r9pi5jb8m"/></g>`,
		"fallback": "coolicons:triangle-plus-bulk-round",
	});
}

export default Component;
