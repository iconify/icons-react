import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzi5ewb3w.css';
import '../../css/e/e-4h8bc1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzi5ewb3w"/><path clip-rule="evenodd" class="e-4h8bc1d"/></g>`,
		"fallback": "reicon:star-fall4-filled",
	});
}

export default Component;
