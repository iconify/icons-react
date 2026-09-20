import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ot3w7qb2l.css';
import '../../css/q/qe1rlw2rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ot3w7qb2l"/><path class="qe1rlw2rz"/></g>`,
		"fallback": "reicon:tag2-duotone",
	});
}

export default Component;
