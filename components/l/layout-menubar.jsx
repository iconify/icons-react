import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8tv5d0oq.css';
import '../../css/o/o3z9n3s0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8tv5d0oq"/><path clip-rule="evenodd" class="o3z9n3s0x"/></g>`,
		"fallback": "codicon:layout-menubar",
	});
}

export default Component;
