import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cnu6nwhga.css';
import '../../css/m/mxc1lkm_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cnu6nwhga"/><path class="mxc1lkm_d"/></g>`,
		"fallback": "streamline-color:lock-rotation-flat",
	});
}

export default Component;
