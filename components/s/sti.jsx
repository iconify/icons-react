import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7fafxb8d.css';
import '../../css/r/rb97rkbrn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7fafxb8d"/><path clip-rule="evenodd" class="rb97rkbrn"/></g>`,
		"fallback": "healthicons:sti",
	});
}

export default Component;
