import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hhk_3sb_s.css';
import '../../css/n/nbsz5ubbo.css';
import '../../css/d/d3oe1fwko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hhk_3sb_s"/><path class="nbsz5ubbo"/><path clip-rule="evenodd" class="d3oe1fwko"/></g>`,
		"fallback": "solar:tornado-bold",
	});
}

export default Component;
