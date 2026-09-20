import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cledrguzw.css';
import '../../css/v/vde1zsqvi.css';
import '../../css/b/b82_bfbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cledrguzw"/><path clip-rule="evenodd" class="vde1zsqvi"/><path class="b82_bfbnn"/></g>`,
		"fallback": "nrk:smart-watch",
	});
}

export default Component;
