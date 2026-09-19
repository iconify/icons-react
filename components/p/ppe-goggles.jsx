import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5964rbcx.css';
import '../../css/o/o0810kmwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5964rbcx"/><path clip-rule="evenodd" class="o0810kmwd"/></g>`,
		"fallback": "healthicons:ppe-goggles",
	});
}

export default Component;
