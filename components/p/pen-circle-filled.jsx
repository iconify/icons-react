import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szmo2io3p.css';
import '../../css/w/wtlpsdbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szmo2io3p"/><path class="wtlpsdbpo"/></g>`,
		"fallback": "reicon:pen-circle-filled",
	});
}

export default Component;
