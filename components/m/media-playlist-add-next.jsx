import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fv_02cc4d.css';
import '../../css/a/ag4bb1_1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fv_02cc4d"/><path class="ag4bb1_1h"/></g>`,
		"fallback": "nrk:media-playlist-add-next",
	});
}

export default Component;
