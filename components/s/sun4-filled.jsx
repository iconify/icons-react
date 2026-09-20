import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t359g4c1c.css';
import '../../css/e/e9o06abrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t359g4c1c"/><path class="e9o06abrw"/></g>`,
		"fallback": "reicon:sun4-filled",
	});
}

export default Component;
