import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veyf2bb7h.css';
import '../../css/q/qpiridc4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="veyf2bb7h"/><path class="qpiridc4l"/></g>`,
		"fallback": "streamline-flex-color:stairs-1",
	});
}

export default Component;
