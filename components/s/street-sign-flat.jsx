import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jiyehpbyj.css';
import '../../css/h/hxx6amp5b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jiyehpbyj"/><path class="hxx6amp5b"/></g>`,
		"fallback": "streamline-flex-color:street-sign-flat",
	});
}

export default Component;
