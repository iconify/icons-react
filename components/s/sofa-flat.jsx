import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iphsjwixt.css';
import '../../css/e/e5e3f_vhi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iphsjwixt"/><path class="e5e3f_vhi"/></g>`,
		"fallback": "streamline-flex-color:sofa-flat",
	});
}

export default Component;
