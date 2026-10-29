import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymsh4jbls.css';
import '../../css/x/xww6dnqya.css';
import '../../css/t/t8-4j7c2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ymsh4jbls"/><path class="wm-a xww6dnqya"/><path class="t8-4j7c2p"/></g>`,
		"fallback": "withicons:microwave-duo",
	});
}

export default Component;
