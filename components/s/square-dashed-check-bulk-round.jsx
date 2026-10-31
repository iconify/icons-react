import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5fjbaboy.css';
import '../../css/g/gaczx7b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5fjbaboy"/><path class="gaczx7b7v"/></g>`,
		"fallback": "coolicons:square-dashed-check-bulk-round",
	});
}

export default Component;
