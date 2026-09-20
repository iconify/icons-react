import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/ql7naxbki.css';
import '../../css/t/tk_x7df-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ql7naxbki"/><path class="tk_x7df-y"/></g>`,
		"fallback": "streamline-freehand-color:transfer-pictures-sent",
	});
}

export default Component;
