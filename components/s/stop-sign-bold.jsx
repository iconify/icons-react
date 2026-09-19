import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shtly5bpz.css';
import '../../css/c/c460bt_5h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shtly5bpz"/><path clip-rule="evenodd" class="c460bt_5h"/></g>`,
		"fallback": "glyphs:stop-sign-bold",
	});
}

export default Component;
