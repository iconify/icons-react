import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edfjyobwc.css';
import '../../css/l/l7d32zb8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edfjyobwc"/><path class="l7d32zb8q"/></g>`,
		"fallback": "streamline-color:map-fold",
	});
}

export default Component;
