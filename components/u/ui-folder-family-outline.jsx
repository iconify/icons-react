import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp3yabbof.css';
import '../../css/p/px6msrbkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vp3yabbof"/><path clip-rule="evenodd" class="px6msrbkn"/></g>`,
		"fallback": "healthicons:ui-folder-family-outline",
	});
}

export default Component;
