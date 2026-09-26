import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl2q-bbtk.css';
import '../../css/u/u2fps5bna.css';
import '../../css/h/hvg_2gx5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cl2q-bbtk"/><path class="u2fps5bna"/><path class="hvg_2gx5s"/></g>`,
		"fallback": "solar:move-vertical-bold-duotone",
	});
}

export default Component;
