import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5dwkvbfp.css';
import '../../css/z/zlf2y6b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5dwkvbfp"/><path class="zlf2y6b4o"/></g>`,
		"fallback": "ginetex:tumble-drying",
	});
}

export default Component;
