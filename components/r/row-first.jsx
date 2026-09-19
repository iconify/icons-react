import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f4dn3okan.css';
import '../../css/d/d9gy36trc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f4dn3okan"/><path class="d9gy36trc"/></g>`,
		"fallback": "gg:row-first",
	});
}

export default Component;
