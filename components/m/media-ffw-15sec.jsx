import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvq7txzmu.css';
import '../../css/d/d_cx5ubbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lvq7txzmu"/><path class="d_cx5ubbm"/></g>`,
		"fallback": "nrk:media-ffw-15sec",
	});
}

export default Component;
