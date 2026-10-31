import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lsxhw2bwk.css';
import '../../css/x/x08n7km5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lsxhw2bwk"/><path class="x08n7km5w"/></g>`,
		"fallback": "coolicons:triangle-check-bulk-round",
	});
}

export default Component;
