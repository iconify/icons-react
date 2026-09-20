import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfrjlxb8w.css';
import '../../css/u/ufb_r8e8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kfrjlxb8w"/><path clip-rule="evenodd" class="ufb_r8e8x"/></g>`,
		"fallback": "solar:rewind-5-seconds-back-bold-duotone",
	});
}

export default Component;
