import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zj-rz0bwn.css';
import '../../css/c/cpepzbbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zj-rz0bwn"/><path class="cpepzbbpa"/></g>`,
		"fallback": "iconaut:presentation-solid",
	});
}

export default Component;
