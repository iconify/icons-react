import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cubpvbc-b.css';
import '../../css/k/kn_yew6ja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cubpvbc-b"/><path clip-rule="evenodd" class="kn_yew6ja"/></g>`,
		"fallback": "heroicons:magnifying-glass-minus-20-solid",
	});
}

export default Component;
