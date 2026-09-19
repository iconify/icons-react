import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlu_-xbel.css';
import '../../css/n/n_41g1asg.css';
import '../../css/h/hq3yghbwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlu_-xbel"/><path class="n_41g1asg"/><path class="hq3yghbwf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-walking-facing-right",
	});
}

export default Component;
