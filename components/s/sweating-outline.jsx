import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yi_7vme2b.css';
import '../../css/w/w3a9vb0vh.css';
import '../../css/g/gvtuoyesg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yi_7vme2b"/><path class="w3a9vb0vh"/><path clip-rule="evenodd" class="gvtuoyesg"/></g>`,
		"fallback": "healthicons:sweating-outline",
	});
}

export default Component;
