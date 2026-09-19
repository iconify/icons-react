import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqns_pp5c.css';
import '../../css/l/l-h6727_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wqns_pp5c"/><path class="l-h6727_y"/></g>`,
		"fallback": "healthicons:pharmacy",
	});
}

export default Component;
