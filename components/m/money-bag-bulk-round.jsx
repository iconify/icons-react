import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwpwa14ne.css';
import '../../css/h/hlbd05bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwpwa14ne"/><path class="hlbd05bee"/></g>`,
		"fallback": "coolicons:money-bag-bulk-round",
	});
}

export default Component;
