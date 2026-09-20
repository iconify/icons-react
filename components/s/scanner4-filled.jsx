import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1ny4esgz.css';
import '../../css/g/g-jolvkqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1ny4esgz"/><path class="g-jolvkqh"/></g>`,
		"fallback": "reicon:scanner4-filled",
	});
}

export default Component;
