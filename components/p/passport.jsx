import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/buxga7syi.css';
import '../../css/z/zm38tmb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="buxga7syi"/><path class="wm-a zm38tmb2p"/></g>`,
		"fallback": "withicons:passport",
	});
}

export default Component;
