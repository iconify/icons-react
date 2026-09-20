import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w6pneq9tn.css';
import '../../css/z/z7zn9ac9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w6pneq9tn"/><path class="z7zn9ac9x"/></g>`,
		"fallback": "reicon:sim3-duotone",
	});
}

export default Component;
