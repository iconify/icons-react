import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r7ks2tbhz.css';
import '../../css/t/t437jtbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r7ks2tbhz secondary"/><path class="primary t437jtbkl"/></g>`,
		"fallback": "iconaut:picture-in-picture-duotone",
	});
}

export default Component;
