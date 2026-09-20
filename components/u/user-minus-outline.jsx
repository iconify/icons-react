import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kk0vstd2z.css';
import '../../css/d/dwsulhgrz.css';
import '../../css/y/yyuurebsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kk0vstd2z"/><path class="dwsulhgrz"/><path clip-rule="evenodd" class="yyuurebsp"/></g>`,
		"fallback": "solar:user-minus-outline",
	});
}

export default Component;
