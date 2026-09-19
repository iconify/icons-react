import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0-ux1bvw.css';
import '../../css/l/l22prnp0x.css';
import '../../css/z/zmfcjwbzt.css';
import '../../css/q/q4tm2pwul.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0-ux1bvw"/><path clip-rule="evenodd" class="l22prnp0x"/><path class="zmfcjwbzt"/><path clip-rule="evenodd" class="q4tm2pwul"/></g>`,
		"fallback": "glyphs:note-pad-1-outline",
	});
}

export default Component;
