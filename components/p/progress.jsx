import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbope9bia.css';
import '../../css/d/d3i2mgbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="sbope9bia"/><path clip-rule="evenodd" class="d3i2mgbjs"/></g>`,
		"fallback": "nrk:progress",
	});
}

export default Component;
