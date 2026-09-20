import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvflq9thr.css';
import '../../css/s/s1f18zdzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvflq9thr"/><path class="s1f18zdzy"/></g>`,
		"fallback": "solar:sort-vertical-bold",
	});
}

export default Component;
