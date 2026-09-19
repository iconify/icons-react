import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt9jrir2k.css';
import '../../css/p/p7nl5dbry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mt9jrir2k"/><path class="p7nl5dbry"/></g>`,
		"fallback": "healthicons:outbreak",
	});
}

export default Component;
