import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaz-620rr.css';
import '../../css/j/juah90v9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kaz-620rr secondary"/><path class="juah90v9d primary"/></g>`,
		"fallback": "iconaut:number-4-duotone",
	});
}

export default Component;
