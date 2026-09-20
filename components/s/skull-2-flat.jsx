import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lx490zb0o.css';
import '../../css/x/xovx_8b3w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lx490zb0o"/><path class="xovx_8b3w"/></g>`,
		"fallback": "streamline-flex-color:skull-2-flat",
	});
}

export default Component;
