import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm1ydv3vy.css';
import '../../css/g/gvl6_ubne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vm1ydv3vy"/><path class="gvl6_ubne"/></g>`,
		"fallback": "healthicons:nappy-diaper",
	});
}

export default Component;
