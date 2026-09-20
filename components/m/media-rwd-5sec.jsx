import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hid2wib9g.css';
import '../../css/m/msx6cub7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hid2wib9g"/><path class="msx6cub7v"/></g>`,
		"fallback": "nrk:media-rwd-5sec",
	});
}

export default Component;
