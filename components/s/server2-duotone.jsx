import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbke7ms9x.css';
import '../../css/a/a7olspw6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbke7ms9x"/><path class="a7olspw6o"/></g>`,
		"fallback": "reicon:server2-duotone",
	});
}

export default Component;
