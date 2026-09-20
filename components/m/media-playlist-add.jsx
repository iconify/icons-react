import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cs_600bkd.css';
import '../../css/c/ct71exrdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cs_600bkd"/><path class="ct71exrdp"/></g>`,
		"fallback": "nrk:media-playlist-add",
	});
}

export default Component;
