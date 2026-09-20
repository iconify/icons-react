import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y_j71y3en.css';
import '../../css/n/nf8v13jjf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y_j71y3en"/><path class="nf8v13jjf"/></g>`,
		"fallback": "streamline-color:markdown-document-programming-flat",
	});
}

export default Component;
