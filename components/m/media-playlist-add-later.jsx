import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucy1_acvk.css';
import '../../css/q/q6ljfwb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucy1_acvk"/><path class="q6ljfwb4y"/></g>`,
		"fallback": "nrk:media-playlist-add-later",
	});
}

export default Component;
