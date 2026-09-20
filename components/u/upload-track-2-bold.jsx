import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtedal7-d.css';
import '../../css/d/dd4h-rb-k.css';
import '../../css/y/yrwd8544h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dtedal7-d"/><path class="dd4h-rb-k"/><path clip-rule="evenodd" class="yrwd8544h"/></g>`,
		"fallback": "solar:upload-track-2-bold",
	});
}

export default Component;
