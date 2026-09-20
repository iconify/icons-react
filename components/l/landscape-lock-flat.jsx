import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hs0n-qjnn.css';
import '../../css/c/cuekppbqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hs0n-qjnn"/><path class="cuekppbqm"/></g>`,
		"fallback": "streamline-flex-color:landscape-lock-flat",
	});
}

export default Component;
