import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huo4mrudt.css';
import '../../css/y/yuzp2ibzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="huo4mrudt"/><path clip-rule="evenodd" class="yuzp2ibzs"/></g>`,
		"fallback": "reicon:skateboard-duotone",
	});
}

export default Component;
