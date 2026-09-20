import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fqdsbz0mf.css';
import '../../css/c/cpf4sxbhl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fqdsbz0mf"/><path class="cpf4sxbhl"/></g>`,
		"fallback": "streamline-flex-color:keyboard-flat",
	});
}

export default Component;
