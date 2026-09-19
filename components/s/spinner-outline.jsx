import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j_xas5f6w.css';
import '../../css/x/x_dsmwxhs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j_xas5f6w"/><path class="x_dsmwxhs"/></g>`,
		"fallback": "glyphs:spinner-outline",
	});
}

export default Component;
