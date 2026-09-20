import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdnfl6brb.css';
import '../../css/y/y4m1e2bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdnfl6brb"/><path class="y4m1e2bbu"/></g>`,
		"fallback": "reicon:key-square8-filled",
	});
}

export default Component;
