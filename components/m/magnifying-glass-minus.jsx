import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa_6u5a4y.css';
import '../../css/k/kytsveb0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fa_6u5a4y"/><path clip-rule="evenodd" class="kytsveb0a"/></g>`,
		"fallback": "heroicons-solid:magnifying-glass-minus",
	});
}

export default Component;
