import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qxzpzpbcm.css';
import '../../css/v/v92q6n4hl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qxzpzpbcm"/><path class="v92q6n4hl"/></g>`,
		"fallback": "glyphs-poly:plane",
	});
}

export default Component;
