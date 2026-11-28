import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/buvluubwx.css';
import '../../css/l/ln-1754us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="buvluubwx secondary"/><path class="ln-1754us primary"/></g>`,
		"fallback": "iconaut:markdown-duotone",
	});
}

export default Component;
