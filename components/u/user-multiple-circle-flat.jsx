import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/es5p_nztn.css';
import '../../css/r/rr8bkj7mz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="es5p_nztn"/><path class="rr8bkj7mz"/></g>`,
		"fallback": "streamline-color:user-multiple-circle-flat",
	});
}

export default Component;
