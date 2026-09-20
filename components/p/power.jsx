import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j48wc9utk.css';
import '../../css/g/g4ry74i3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j48wc9utk"/><path class="g4ry74i3g"/></g>`,
		"fallback": "reicon:power",
	});
}

export default Component;
