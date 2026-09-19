import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7e2b6-4b.css';
import '../../css/t/t267_cb-w.css';
import '../../css/j/jmk2flbmo.css';
import '../../css/z/ztepo7adj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h7e2b6-4b"/><path class="t267_cb-w"/><path class="jmk2flbmo"/><path class="ztepo7adj"/></g>`,
		"fallback": "glyphs-poly:tachometer-9",
	});
}

export default Component;
