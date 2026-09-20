import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r1ev9cbtw.css';
import '../../css/j/jv5q4rboy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r1ev9cbtw"/><path class="jv5q4rboy"/></g>`,
		"fallback": "streamline-color:square-root-x-circle-flat",
	});
}

export default Component;
