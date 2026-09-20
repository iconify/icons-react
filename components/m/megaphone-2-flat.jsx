import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt484qdop.css';
import '../../css/i/iyrc0acvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dt484qdop"/><path class="iyrc0acvc"/></g>`,
		"fallback": "streamline-color:megaphone-2-flat",
	});
}

export default Component;
