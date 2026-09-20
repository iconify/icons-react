import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hid2wib9g.css';
import '../../css/d/d_cx5ubbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hid2wib9g"/><path class="d_cx5ubbm"/></g>`,
		"fallback": "nrk:media-rwd-15sec",
	});
}

export default Component;
