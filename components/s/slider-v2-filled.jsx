import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykej1txza.css';
import '../../css/g/g0oq7xbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ykej1txza"/><path clip-rule="evenodd" class="g0oq7xbac"/></g>`,
		"fallback": "reicon:slider-v2-filled",
	});
}

export default Component;
