import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frkxq78kw.css';
import '../../css/r/razmnrbbm.css';
import '../../css/d/d3vf8keel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="frkxq78kw wm-deco"/><path class="razmnrbbm wm-k"/><path class="d3vf8keel wm-a"/></g>`,
		"fallback": "withicons:rose-bouquet-gloss",
	});
}

export default Component;
