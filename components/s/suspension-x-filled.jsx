import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mab2rwb6t.css';
import '../../css/g/g4sxldlks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mab2rwb6t"/><path clip-rule="evenodd" class="g4sxldlks"/></g>`,
		"fallback": "reicon:suspension-x-filled",
	});
}

export default Component;
