import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu3-unblw.css';
import '../../css/w/wjtjoabqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yu3-unblw"/><path class="wjtjoabqt"/></g>`,
		"fallback": "solar:paperclip-bold-duotone",
	});
}

export default Component;
