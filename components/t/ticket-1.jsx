import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5a-8dbop.css';
import '../../css/i/i76vj15xh.css';
import '../../css/t/ttse8lbkn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j5a-8dbop"/><path class="i76vj15xh"/><path class="ttse8lbkn"/></g>`,
		"fallback": "glyphs-poly:ticket-1",
	});
}

export default Component;
