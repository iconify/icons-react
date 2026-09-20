import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x_pme1bxh.css';
import '../../css/p/pvhb9lb7b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x_pme1bxh"/><path class="pvhb9lb7b"/></g>`,
		"fallback": "streamline-color:virtual-reality-flat",
	});
}

export default Component;
