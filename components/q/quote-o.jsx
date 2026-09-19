import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz1xx_5bn.css';
import '../../css/v/v30ph4b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uz1xx_5bn"/><path class="v30ph4b_w"/></g>`,
		"fallback": "gg:quote-o",
	});
}

export default Component;
