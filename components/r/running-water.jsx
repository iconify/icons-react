import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwn8o7blq.css';
import '../../css/g/gu539fbpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwn8o7blq"/><path clip-rule="evenodd" class="gu539fbpy"/></g>`,
		"fallback": "healthicons:running-water",
	});
}

export default Component;
