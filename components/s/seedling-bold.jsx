import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6d9d-5wa.css';
import '../../css/i/iilf0foug.css';
import '../../css/u/u4158f_1b.css';
import '../../css/x/xsudcvata.css';
import '../../css/j/jt9jc9b4c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j6d9d-5wa"/><path clip-rule="evenodd" class="iilf0foug"/><path class="u4158f_1b"/><path clip-rule="evenodd" class="xsudcvata"/><path class="jt9jc9b4c"/></g>`,
		"fallback": "glyphs:seedling-bold",
	});
}

export default Component;
