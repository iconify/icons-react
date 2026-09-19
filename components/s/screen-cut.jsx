import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3m0g_ble.css';
import '../../css/y/y93ww-f8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d3m0g_ble"/><path class="y93ww-f8h"/></g>`,
		"fallback": "codicon:screen-cut",
	});
}

export default Component;
