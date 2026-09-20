import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s99xws4ri.css';
import '../../css/k/krij3_b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s99xws4ri"/><path class="krij3_b2p"/></g>`,
		"fallback": "solar:link-outline",
	});
}

export default Component;
