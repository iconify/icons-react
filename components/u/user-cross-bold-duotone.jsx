import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcdofucup.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/b/bunvz77al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xcdofucup"/><path class="c_zdt_bqs"/><path class="bunvz77al"/></g>`,
		"fallback": "solar:user-cross-bold-duotone",
	});
}

export default Component;
