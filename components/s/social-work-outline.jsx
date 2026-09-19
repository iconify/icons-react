import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_g-mnblg.css';
import '../../css/p/pe4zbubez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_g-mnblg"/><path clip-rule="evenodd" class="pe4zbubez"/></g>`,
		"fallback": "healthicons:social-work-outline",
	});
}

export default Component;
