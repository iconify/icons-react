import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9w8nbb3z.css';
import '../../css/x/x8ivgm1hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9w8nbb3z"/><path class="x8ivgm1hy"/></g>`,
		"fallback": "coolicons:swatches-bulk-round",
	});
}

export default Component;
