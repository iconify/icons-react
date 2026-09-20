import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fj04qg9qa.css';
import '../../css/y/yv0ezytfy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fj04qg9qa"/><path class="yv0ezytfy"/></g>`,
		"fallback": "streamline-color:telescope-flat",
	});
}

export default Component;
