import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xr7p3xbpc.css';
import '../../css/n/n91nhvbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xr7p3xbpc"/><path class="n91nhvbuv"/></g>`,
		"fallback": "withicons-retro:square-dashed",
	});
}

export default Component;
