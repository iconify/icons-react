import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kknkqexjp.css';
import '../../css/m/mex7ymchk.css';
import '../../css/x/xr5b5tbwe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kknkqexjp"/><path class="mex7ymchk"/><path class="xr5b5tbwe"/></g>`,
		"fallback": "pepicons-pencil:text-bubbles",
	});
}

export default Component;
