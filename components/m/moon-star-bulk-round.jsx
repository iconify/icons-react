import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar69gjbrb.css';
import '../../css/v/vlp5q5bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ar69gjbrb"/><path class="vlp5q5bxg"/></g>`,
		"fallback": "coolicons:moon-star-bulk-round",
	});
}

export default Component;
