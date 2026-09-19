import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb_z5qbdz.css';
import '../../css/u/uc3w6cwkm.css';
import '../../css/l/lumasop3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eb_z5qbdz"/><path clip-rule="evenodd" class="uc3w6cwkm"/><path class="lumasop3o"/></g>`,
		"fallback": "glyphs:mold-bold",
	});
}

export default Component;
