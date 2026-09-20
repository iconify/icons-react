import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbv9vybgh.css';
import '../../css/w/wpon8absj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zbv9vybgh"/><path class="wpon8absj"/></g>`,
		"fallback": "streamline-color:signage-3-flat",
	});
}

export default Component;
