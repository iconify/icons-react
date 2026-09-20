import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu6suc19v.css';
import '../../css/n/ngszbdapl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cu6suc19v"/><path class="ngszbdapl"/></g>`,
		"fallback": "pixelarticons:parking-off",
	});
}

export default Component;
