import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mimlqpbcy.css';
import '../../css/w/wtmq8iber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mimlqpbcy"/><path class="wtmq8iber"/></g>`,
		"fallback": "streamline-color:toilet-sign-man-woman-2",
	});
}

export default Component;
