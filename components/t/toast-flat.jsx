import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4pw_mbrt.css';
import '../../css/s/s6yio6agz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4pw_mbrt"/><path class="s6yio6agz"/></g>`,
		"fallback": "streamline-color:toast-flat",
	});
}

export default Component;
