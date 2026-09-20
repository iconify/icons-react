import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1_fnmbnn.css';
import '../../css/r/rloqbnbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b1_fnmbnn"/><path class="rloqbnbld"/></g>`,
		"fallback": "nrk:list-plus-expressive",
	});
}

export default Component;
