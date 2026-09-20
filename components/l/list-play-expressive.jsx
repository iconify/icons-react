import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1w69zbku.css';
import '../../css/b/bpmq8kbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1w69zbku"/><path class="bpmq8kbgf"/></g>`,
		"fallback": "nrk:list-play-expressive",
	});
}

export default Component;
