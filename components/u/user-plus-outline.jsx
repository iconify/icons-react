import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ha3f25bxe.css';
import '../../css/i/iksb9rpzr.css';
import '../../css/n/n13mhtbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ha3f25bxe"/><path class="iksb9rpzr"/><path clip-rule="evenodd" class="n13mhtbfz"/></g>`,
		"fallback": "solar:user-plus-outline",
	});
}

export default Component;
