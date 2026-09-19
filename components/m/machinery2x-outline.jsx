import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a246yekfz.css';
import '../../css/z/z15dfjbgt.css';
import '../../css/d/d6xyxyb_o.css';
import '../../css/m/m67u5dz9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a246yekfz"/><path clip-rule="evenodd" class="z15dfjbgt"/><path class="d6xyxyb_o"/><path clip-rule="evenodd" class="m67u5dz9l"/></g>`,
		"fallback": "healthicons:machinery2x-outline",
	});
}

export default Component;
