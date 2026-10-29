import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrbf2zb1l.css';
import '../../css/x/xgrg7usag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wrbf2zb1l"/><path class="wm-a xgrg7usag"/></g>`,
		"fallback": "withicons:rotate-cw-duo",
	});
}

export default Component;
