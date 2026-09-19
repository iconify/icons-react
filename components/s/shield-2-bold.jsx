import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/at7l_ccdi.css';
import '../../css/j/j9wf34bgd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="at7l_ccdi"/><path class="j9wf34bgd"/></g>`,
		"fallback": "glyphs:shield-2-bold",
	});
}

export default Component;
