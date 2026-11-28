import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae03mbnqe.css';
import '../../css/t/tlvvffplv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ae03mbnqe secondary"/><path class="primary tlvvffplv"/></g>`,
		"fallback": "iconaut:pilcrow-right-duotone",
	});
}

export default Component;
