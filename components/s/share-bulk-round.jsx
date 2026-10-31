import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/abw49rb6f.css';
import '../../css/u/uoh9-lbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="abw49rb6f"/><path class="uoh9-lbcz"/></g>`,
		"fallback": "coolicons:share-bulk-round",
	});
}

export default Component;
