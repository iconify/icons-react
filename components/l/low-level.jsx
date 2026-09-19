import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oecipzbgq.css';
import '../../css/i/ixai5vu7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oecipzbgq"/><path class="ixai5vu7c"/></g>`,
		"fallback": "healthicons:low-level",
	});
}

export default Component;
