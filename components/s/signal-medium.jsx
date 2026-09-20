import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/s/skoc4sb6l.css';
import '../../css/j/j6yfgv4gv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="skoc4sb6l"/><path class="j6yfgv4gv"/></g>`,
		"fallback": "system-uicons:signal-medium",
	});
}

export default Component;
