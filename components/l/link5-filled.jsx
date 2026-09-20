import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fay0cq03b.css';
import '../../css/g/gs1d4cptn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fay0cq03b"/><path class="gs1d4cptn"/></g>`,
		"fallback": "reicon:link5-filled",
	});
}

export default Component;
