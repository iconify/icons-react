import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5a-3bc8z.css';
import '../../css/s/svty6183z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x5a-3bc8z"/><path class="svty6183z"/></g>`,
		"fallback": "reicon:telescope-duotone",
	});
}

export default Component;
