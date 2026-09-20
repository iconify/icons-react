import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbec-3bav.css';
import '../../css/k/kweogybgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbec-3bav"/><path class="kweogybgz"/></g>`,
		"fallback": "reicon:smart-car-filled",
	});
}

export default Component;
