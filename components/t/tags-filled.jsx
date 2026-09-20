import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-dmrybuj.css';
import '../../css/g/g72a30bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e-dmrybuj"/><path class="g72a30bet"/></g>`,
		"fallback": "reicon:tags-filled",
	});
}

export default Component;
