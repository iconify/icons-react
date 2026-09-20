import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhwwl7bkj.css';
import '../../css/z/zkjbjv7hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhwwl7bkj"/><path clip-rule="evenodd" class="zkjbjv7hv"/></g>`,
		"fallback": "reicon:record-square-filled",
	});
}

export default Component;
