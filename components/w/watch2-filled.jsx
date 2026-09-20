import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0bg0mbfi.css';
import '../../css/r/rw9ru_ymu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0bg0mbfi"/><path clip-rule="evenodd" class="rw9ru_ymu"/></g>`,
		"fallback": "reicon:watch2-filled",
	});
}

export default Component;
