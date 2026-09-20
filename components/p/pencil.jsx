import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed90z1b2y.css';
import '../../css/t/t26pyqb6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed90z1b2y"/><path class="t26pyqb6o"/></g>`,
		"fallback": "streamline-color:pencil",
	});
}

export default Component;
