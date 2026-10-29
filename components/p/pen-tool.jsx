import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ky5cbpbbs.css';
import '../../css/x/xo4qkwf8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ky5cbpbbs"/><path class="wm-a xo4qkwf8x"/></g>`,
		"fallback": "withicons:pen-tool",
	});
}

export default Component;
