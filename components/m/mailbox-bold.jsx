import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bplyu_bdz.css';
import '../../css/t/t_dv8acgh.css';
import '../../css/t/txr5u1n8b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bplyu_bdz"/><path class="t_dv8acgh"/><path clip-rule="evenodd" class="txr5u1n8b"/></g>`,
		"fallback": "glyphs:mailbox-bold",
	});
}

export default Component;
