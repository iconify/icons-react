import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j404cjfad.css';
import '../../css/m/mzdwmd9wf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j404cjfad"/><path class="mzdwmd9wf"/></g>`,
		"fallback": "glyphs-poly:tree-3",
	});
}

export default Component;
