import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6rbr1bpn.css';
import '../../css/v/vc4u717fc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6rbr1bpn"/><path clip-rule="evenodd" class="vc4u717fc"/></g>`,
		"fallback": "streamline-color:one-finger-drag-horizontal-flat",
	});
}

export default Component;
