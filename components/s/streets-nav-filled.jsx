import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srx7wjd9z.css';
import '../../css/m/mobgigbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srx7wjd9z"/><path class="mobgigbae"/></g>`,
		"fallback": "reicon:streets-nav-filled",
	});
}

export default Component;
