import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tg2gynv_b.css';
import '../../css/t/tzqp2bbtu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tg2gynv_b"/><path class="tzqp2bbtu"/></g>`,
		"fallback": "streamline-color:layout-window-1",
	});
}

export default Component;
