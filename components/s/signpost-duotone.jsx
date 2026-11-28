import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozuew_b8f.css';
import '../../css/x/xhm8yzb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozuew_b8f secondary"/><path class="primary xhm8yzb5l"/></g>`,
		"fallback": "iconaut:signpost-duotone",
	});
}

export default Component;
