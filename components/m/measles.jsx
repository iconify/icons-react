import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfizc-09f.css';
import '../../css/w/wqbo99b0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfizc-09f"/><path clip-rule="evenodd" class="wqbo99b0m"/></g>`,
		"fallback": "healthicons:measles",
	});
}

export default Component;
