import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gq-zc8bcu.css';
import '../../css/l/lly56gw9r.css';
import '../../css/b/bc-0_z50q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gq-zc8bcu"/><path class="lly56gw9r"/><path class="bc-0_z50q"/></g>`,
		"fallback": "healthicons:llin-outline",
	});
}

export default Component;
