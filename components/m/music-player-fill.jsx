import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngf3j-2ju.css';
import '../../css/i/idjs3xyxt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ngf3j-2ju"/><path class="idjs3xyxt"/></g>`,
		"fallback": "bi:music-player-fill",
	});
}

export default Component;
