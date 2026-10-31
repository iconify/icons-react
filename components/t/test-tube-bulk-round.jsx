import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dd5846bml.css';
import '../../css/v/vb6diu8xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dd5846bml"/><path class="vb6diu8xm"/></g>`,
		"fallback": "coolicons:test-tube-bulk-round",
	});
}

export default Component;
