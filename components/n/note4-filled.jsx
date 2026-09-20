import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnkwh8u1p.css';
import '../../css/s/s4y0gj0jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tnkwh8u1p"/><path class="s4y0gj0jw"/></g>`,
		"fallback": "reicon:note4-filled",
	});
}

export default Component;
