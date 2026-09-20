import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wlrrcq5eh.css';
import '../../css/v/v94f54bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wlrrcq5eh"/><path class="v94f54bxj"/></g>`,
		"fallback": "reicon:phone-rotate3",
	});
}

export default Component;
