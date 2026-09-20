import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxaay7csj.css';
import '../../css/x/x3zw6y8kh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxaay7csj"/><path class="x3zw6y8kh"/></g>`,
		"fallback": "streamline-flex-color:notepad-text-flat",
	});
}

export default Component;
