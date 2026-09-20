import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6e72xb0h.css';
import '../../css/f/flce2614m.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i6e72xb0h"/><path class="flce2614m"/><path class="c_zdt_bqs"/></g>`,
		"fallback": "solar:user-block-bold",
	});
}

export default Component;
