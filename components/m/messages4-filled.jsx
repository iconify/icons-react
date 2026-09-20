import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wumg2q6qg.css';
import '../../css/p/p8m9q5jog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wumg2q6qg"/><path class="p8m9q5jog"/></g>`,
		"fallback": "reicon:messages4-filled",
	});
}

export default Component;
