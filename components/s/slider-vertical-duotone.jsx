import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy2pyc9_j.css';
import '../../css/c/co589ur6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xy2pyc9_j"/><path class="co589ur6w"/></g>`,
		"fallback": "reicon:slider-vertical-duotone",
	});
}

export default Component;
