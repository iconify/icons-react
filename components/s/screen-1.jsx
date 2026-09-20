import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h77974q4y.css';
import '../../css/m/m9g3qknus.css';
import '../../css/s/sdfqq_u_y.css';
import '../../css/q/q9xhexbqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h77974q4y"/><path class="m9g3qknus"/><path class="sdfqq_u_y"/><path class="q9xhexbqw"/></g>`,
		"fallback": "streamline-plump-color:screen-1",
	});
}

export default Component;
