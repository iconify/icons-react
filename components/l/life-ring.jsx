import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ob3wisb0v.css';
import '../../css/f/fpegw0bux.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ob3wisb0v"/><path class="fpegw0bux"/></g>`,
		"fallback": "glyphs-poly:life-ring",
	});
}

export default Component;
