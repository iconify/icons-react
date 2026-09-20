import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e7voqmnrx.css';
import '../../css/b/by3g9obhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e7voqmnrx"/><path class="by3g9obhg"/></g>`,
		"fallback": "solar:stop-bold-duotone",
	});
}

export default Component;
