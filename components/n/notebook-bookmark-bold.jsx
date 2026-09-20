import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbp0l5bpj.css';
import '../../css/l/le1o-ibmd.css';
import '../../css/r/rz20dxvoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vbp0l5bpj"/><path clip-rule="evenodd" class="le1o-ibmd"/><path class="rz20dxvoy"/></g>`,
		"fallback": "solar:notebook-bookmark-bold",
	});
}

export default Component;
