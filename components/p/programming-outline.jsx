import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyh5gf8py.css';
import '../../css/k/ke227gbwo.css';
import '../../css/k/k9825nbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eyh5gf8py"/><path class="ke227gbwo"/><path clip-rule="evenodd" class="k9825nbyc"/></g>`,
		"fallback": "solar:programming-outline",
	});
}

export default Component;
