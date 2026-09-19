import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xma0296aw.css';
import '../../css/j/jgij2fblb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xma0296aw"/><path class="jgij2fblb"/></g>`,
		"fallback": "glyphs:pills-outline",
	});
}

export default Component;
