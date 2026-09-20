import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1lclbo_h.css';
import '../../css/k/kybx7tbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w1lclbo_h"/><path class="kybx7tbdf"/></g>`,
		"fallback": "reicon:text-highlight-filled",
	});
}

export default Component;
