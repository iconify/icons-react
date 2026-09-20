import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xb58bubnl.css';
import '../../css/k/ka62jfb8e.css';
import '../../css/p/pq3m40bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xb58bubnl"/><path clip-rule="evenodd" class="ka62jfb8e"/><path class="pq3m40bxc"/></g>`,
		"fallback": "reicon:laptop-code",
	});
}

export default Component;
