import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/px2fxif7e.css';
import '../../css/b/bfe3j1boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="px2fxif7e"/><path class="bfe3j1boz wm-a"/></g>`,
		"fallback": "withicons:tornado",
	});
}

export default Component;
