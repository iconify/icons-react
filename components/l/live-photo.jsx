import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5_k-pikw.css';
import '../../css/f/falv_c03p.css';
import '../../css/g/ggu0prboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y5_k-pikw"/><path clip-rule="evenodd" class="falv_c03p"/><path clip-rule="evenodd" class="ggu0prboh"/></g>`,
		"fallback": "gg:live-photo",
	});
}

export default Component;
