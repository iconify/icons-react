import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq55pabmy.css';
import '../../css/h/hxs75cc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq55pabmy secondary"/><path class="hxs75cc7v primary"/></g>`,
		"fallback": "iconaut:list-filter-duotone",
	});
}

export default Component;
