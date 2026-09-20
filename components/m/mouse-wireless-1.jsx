import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4qm2lbta.css';
import '../../css/r/rjgr-hbqx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4qm2lbta"/><path class="rjgr-hbqx"/></g>`,
		"fallback": "streamline-color:mouse-wireless-1",
	});
}

export default Component;
