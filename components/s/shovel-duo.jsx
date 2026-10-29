import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/krhckl9yo.css';
import '../../css/x/xkg1wybgt.css';
import '../../css/f/fjzpsmbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="krhckl9yo"/><path class="wm-a xkg1wybgt"/><path class="fjzpsmbxy"/></g>`,
		"fallback": "withicons:shovel-duo",
	});
}

export default Component;
