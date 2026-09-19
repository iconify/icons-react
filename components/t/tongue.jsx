import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ra5g_ob8l.css';
import '../../css/t/ti9ommb8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ra5g_ob8l"/><path clip-rule="evenodd" class="ti9ommb8x"/></g>`,
		"fallback": "healthicons:tongue",
	});
}

export default Component;
