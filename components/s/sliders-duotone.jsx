import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp15rb4mi.css';
import '../../css/y/yhatkctwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zp15rb4mi"/><path class="primary yhatkctwc"/></g>`,
		"fallback": "iconaut:sliders-duotone",
	});
}

export default Component;
