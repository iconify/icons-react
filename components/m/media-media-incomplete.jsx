import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxry4cc6j.css';
import '../../css/p/p1hp9pbhb.css';
import '../../css/k/k1aplpb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nxry4cc6j"/><path class="p1hp9pbhb"/><path class="k1aplpb8p"/></g>`,
		"fallback": "nrk:media-media-incomplete",
	});
}

export default Component;
