import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzi9yltrz.css';
import '../../css/v/vnfqvfhnp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzi9yltrz"/><path clip-rule="evenodd" class="vnfqvfhnp"/></g>`,
		"fallback": "glyphs:school-bus-bold",
	});
}

export default Component;
