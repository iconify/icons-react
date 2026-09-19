import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j0uptwbwv.css';
import '../../css/p/pu5v9vwih.css';
import '../../css/c/cyr97l9zo.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j0uptwbwv"/><path class="pu5v9vwih"/><path class="cyr97l9zo"/></g>`,
		"fallback": "flagpack:td",
	});
}

export default Component;
