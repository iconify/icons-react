import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvurf2-og.css';
import '../../css/e/etndu5bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kvurf2-og"/><path class="etndu5bhu"/></g>`,
		"fallback": "reicon:sidebar2-duotone",
	});
}

export default Component;
