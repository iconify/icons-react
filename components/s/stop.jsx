import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_62b9bmb.css';
import '../../css/d/dmig-gjdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_62b9bmb"/><path clip-rule="evenodd" class="dmig-gjdk"/></g>`,
		"fallback": "healthicons:stop",
	});
}

export default Component;
