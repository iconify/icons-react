import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ct71exrdp.css';
import '../../css/j/jxlk7w4ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ct71exrdp"/><path class="jxlk7w4ot"/></g>`,
		"fallback": "nrk:media-playlist-remove",
	});
}

export default Component;
