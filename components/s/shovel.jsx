import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fjzpsmbxy.css';
import '../../css/x/xkg1wybgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fjzpsmbxy"/><path class="wm-a xkg1wybgt"/></g>`,
		"fallback": "withicons:shovel",
	});
}

export default Component;
