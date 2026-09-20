import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8tfjrxjz.css';
import '../../css/l/l7rxambcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c8tfjrxjz"/><path class="l7rxambcj"/></g>`,
		"fallback": "solar:t-shirt-bold-duotone",
	});
}

export default Component;
