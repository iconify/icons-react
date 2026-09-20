import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvq7txzmu.css';
import '../../css/l/l-sqly5xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lvq7txzmu"/><path class="l-sqly5xq"/></g>`,
		"fallback": "nrk:media-ffw-30sec",
	});
}

export default Component;
