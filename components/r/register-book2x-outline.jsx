import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhes14ubm.css';
import '../../css/w/w7d7mlbak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qhes14ubm"/><path clip-rule="evenodd" class="w7d7mlbak"/></g>`,
		"fallback": "healthicons:register-book2x-outline",
	});
}

export default Component;
