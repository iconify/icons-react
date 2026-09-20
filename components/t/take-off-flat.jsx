import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mwc2-lbrs.css';
import '../../css/z/z80qbgopa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mwc2-lbrs"/><path class="z80qbgopa"/></g>`,
		"fallback": "streamline-color:take-off-flat",
	});
}

export default Component;
