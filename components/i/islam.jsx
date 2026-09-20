import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alq3d8bxe.css';
import '../../css/i/inclo6q1p.css';
import '../../css/a/aotg0jnkj.css';
import '../../css/h/h5gz3j7uq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="alq3d8bxe"/><path class="inclo6q1p"/><path class="aotg0jnkj"/><path class="h5gz3j7uq"/></g>`,
		"fallback": "streamline-color:islam",
	});
}

export default Component;
