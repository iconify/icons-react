import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0ktrcbcx.css';
import '../../css/y/y7ot3nllw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0ktrcbcx"/><path class="y7ot3nllw"/></g>`,
		"fallback": "griddy-icons:thunderstorm",
	});
}

export default Component;
