import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebdxk1bnu.css';
import '../../css/d/dt02tjb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ebdxk1bnu"/><path clip-rule="evenodd" class="dt02tjb4d"/></g>`,
		"fallback": "nrk:watch",
	});
}

export default Component;
