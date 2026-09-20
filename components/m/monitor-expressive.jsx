import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/forfs2b7r.css';
import '../../css/h/hkw9--bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="forfs2b7r"/><path clip-rule="evenodd" class="hkw9--bai"/></g>`,
		"fallback": "nrk:monitor-expressive",
	});
}

export default Component;
