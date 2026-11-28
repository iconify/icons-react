import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-d577c-w.css';
import '../../css/l/lnv6p9icz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-d577c-w secondary"/><path class="lnv6p9icz primary"/></g>`,
		"fallback": "iconaut:strawberry-duotone",
	});
}

export default Component;
