import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xt7k71q6y.css';
import '../../css/e/e1ek1fbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xt7k71q6y"/><path clip-rule="evenodd" class="e1ek1fbng"/></g>`,
		"fallback": "solar:playlist-2-bold",
	});
}

export default Component;
