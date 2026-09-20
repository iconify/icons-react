import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngvjkbc_x.css';
import '../../css/h/htqn-_hwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ngvjkbc_x"/><path clip-rule="evenodd" class="htqn-_hwi"/></g>`,
		"fallback": "reicon:run3-filled",
	});
}

export default Component;
