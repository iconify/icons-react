import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo1dxrgbf.css';
import '../../css/l/l4m1k6jxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mo1dxrgbf secondary"/><path class="l4m1k6jxo primary"/></g>`,
		"fallback": "iconaut:pineapple-duotone",
	});
}

export default Component;
