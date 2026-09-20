import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qehf79b8h.css';
import '../../css/p/puj7i7blo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qehf79b8h"/><path clip-rule="evenodd" class="puj7i7blo"/></g>`,
		"fallback": "streamline-color:outgoing-call-flat",
	});
}

export default Component;
