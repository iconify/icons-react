import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhmpre-cd.css';
import '../../css/d/d_jtycctg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zhmpre-cd"/><path class="d_jtycctg"/></g>`,
		"fallback": "glyphs-poly:sunny-mostly",
	});
}

export default Component;
