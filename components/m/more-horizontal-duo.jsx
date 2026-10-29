import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wmczoccut.css';
import '../../css/q/qh_txoe1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wmczoccut"/><path class="qh_txoe1h"/></g>`,
		"fallback": "withicons:more-horizontal-duo",
	});
}

export default Component;
