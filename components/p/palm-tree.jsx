import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxlyk5b-t.css';
import '../../css/x/xpxxzjbvo.css';
import '../../css/r/rt4x1ab2l.css';
import '../../css/y/yh2q36bcg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxlyk5b-t"/><path class="xpxxzjbvo"/><path class="rt4x1ab2l"/><path class="yh2q36bcg"/></g>`,
		"fallback": "glyphs-poly:palm-tree",
	});
}

export default Component;
