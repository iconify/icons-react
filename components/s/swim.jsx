import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p7md35rfj.css';
import '../../css/t/tm-gy7bea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p7md35rfj"/><path clip-rule="evenodd" class="tm-gy7bea"/></g>`,
		"fallback": "healthicons:swim",
	});
}

export default Component;
