import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t8-4j7c2p.css';
import '../../css/x/xww6dnqya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t8-4j7c2p"/><path class="wm-a xww6dnqya"/></g>`,
		"fallback": "withicons:microwave",
	});
}

export default Component;
