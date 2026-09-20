import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-ag6nvrg.css';
import '../../css/b/b7k-3tx5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f-ag6nvrg"/><path class="b7k-3tx5o"/></g>`,
		"fallback": "solar:login-bold-duotone",
	});
}

export default Component;
