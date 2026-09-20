import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zb-b_xbkh.css';
import '../../css/d/dy161essa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zb-b_xbkh"/><path class="dy161essa"/></g>`,
		"fallback": "reicon:rocket2-duotone",
	});
}

export default Component;
