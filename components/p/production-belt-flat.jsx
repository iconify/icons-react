import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab3uexbgo.css';
import '../../css/d/d5a4hj3ff.css';
import '../../css/n/n16g4u9fz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ab3uexbgo"/><path class="d5a4hj3ff"/><path clip-rule="evenodd" class="n16g4u9fz"/></g>`,
		"fallback": "streamline-color:production-belt-flat",
	});
}

export default Component;
