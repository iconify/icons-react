import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfc_njb3x.css';
import '../../css/l/l2r4i9n9q.css';
import '../../css/j/jw6m5iv8c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sfc_njb3x"/><path class="l2r4i9n9q"/><path class="jw6m5iv8c"/></g>`,
		"fallback": "glyphs:male-bold",
	});
}

export default Component;
