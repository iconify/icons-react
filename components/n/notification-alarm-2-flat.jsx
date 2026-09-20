import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ot4bf_9ok.css';
import '../../css/c/cgnf4vb0y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ot4bf_9ok"/><path class="cgnf4vb0y"/></g>`,
		"fallback": "streamline-color:notification-alarm-2-flat",
	});
}

export default Component;
