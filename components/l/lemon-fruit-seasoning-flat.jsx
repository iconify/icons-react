import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rkct08b6g.css';
import '../../css/j/j2iiied-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rkct08b6g"/><path class="j2iiied-s"/></g>`,
		"fallback": "streamline-color:lemon-fruit-seasoning-flat",
	});
}

export default Component;
