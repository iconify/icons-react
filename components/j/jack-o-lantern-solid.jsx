import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tsh7rbbjt.css';
import '../../css/m/myss01bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tsh7rbbjt"/><path class="myss01bga wm-s"/></g>`,
		"fallback": "withicons:jack-o-lantern-solid",
	});
}

export default Component;
