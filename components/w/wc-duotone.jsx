import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufhc7d9py.css';
import '../../css/m/m5jrbobfk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufhc7d9py"/><path class="m5jrbobfk"/></g>`,
		"fallback": "pullo:wc-duotone",
	});
}

export default Component;
