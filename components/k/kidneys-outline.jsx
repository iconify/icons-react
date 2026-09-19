import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozjh1vbqt.css';
import '../../css/d/ddhtu8nun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ozjh1vbqt"/><path class="ddhtu8nun"/></g>`,
		"fallback": "healthicons:kidneys-outline",
	});
}

export default Component;
