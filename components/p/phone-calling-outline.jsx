import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l28qpg_5e.css';
import '../../css/z/zrk0uqbtm.css';
import '../../css/b/b2ejj7brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l28qpg_5e"/><path class="zrk0uqbtm"/><path class="b2ejj7brb"/></g>`,
		"fallback": "solar:phone-calling-outline",
	});
}

export default Component;
