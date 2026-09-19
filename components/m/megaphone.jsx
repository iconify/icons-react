import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k3yvm1bga.css';
import '../../css/w/w0y2p_yfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k3yvm1bga"/><path clip-rule="evenodd" class="w0y2p_yfp"/></g>`,
		"fallback": "healthicons:megaphone",
	});
}

export default Component;
