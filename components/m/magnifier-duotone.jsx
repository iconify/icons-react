import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j75hptb7k.css';
import '../../css/g/gflmrzp2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j75hptb7k"/><path class="gflmrzp2i"/></g>`,
		"fallback": "reicon:magnifier-duotone",
	});
}

export default Component;
