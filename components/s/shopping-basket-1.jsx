import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z22ekobai.css';
import '../../css/o/ok0jmebqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z22ekobai"/><path class="ok0jmebqc"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-1",
	});
}

export default Component;
