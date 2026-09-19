import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyskzyy-u.css';
import '../../css/c/civ9y9f5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lyskzyy-u"/><path class="civ9y9f5e"/></g>`,
		"fallback": "healthicons:ppe-face-shield-alt-outline",
	});
}

export default Component;
