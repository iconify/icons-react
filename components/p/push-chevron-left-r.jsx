import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qz_u8ubmt.css';
import '../../css/p/p8t9n2b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qz_u8ubmt"/><path clip-rule="evenodd" class="p8t9n2b4x"/></g>`,
		"fallback": "gg:push-chevron-left-r",
	});
}

export default Component;
