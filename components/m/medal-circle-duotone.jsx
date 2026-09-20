import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2vv6dr1x.css';
import '../../css/i/i4bvi8bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2vv6dr1x"/><path clip-rule="evenodd" class="i4bvi8bgx"/></g>`,
		"fallback": "reicon:medal-circle-duotone",
	});
}

export default Component;
