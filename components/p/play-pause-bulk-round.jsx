import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftwsh098i.css';
import '../../css/u/uzrt0fbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ftwsh098i"/><path class="uzrt0fbtk"/></g>`,
		"fallback": "coolicons:play-pause-bulk-round",
	});
}

export default Component;
