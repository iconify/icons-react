import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3a_d_ecu.css';
import '../../css/l/l-zo01b-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d3a_d_ecu"/><path clip-rule="evenodd" class="l-zo01b-i"/></g>`,
		"fallback": "glyphs:tachometer-bold",
	});
}

export default Component;
