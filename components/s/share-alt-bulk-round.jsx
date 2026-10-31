import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r65c07b1e.css';
import '../../css/h/hug0rshgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r65c07b1e"/><path class="hug0rshgv"/></g>`,
		"fallback": "coolicons:share-alt-bulk-round",
	});
}

export default Component;
