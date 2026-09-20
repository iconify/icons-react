import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxeneaczg.css';
import '../../css/a/aod3mi33u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxeneaczg"/><path clip-rule="evenodd" class="aod3mi33u"/></g>`,
		"fallback": "reicon:safe-square-filled",
	});
}

export default Component;
