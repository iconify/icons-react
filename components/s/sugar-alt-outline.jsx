import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxgp1cb4o.css';
import '../../css/f/fr25qac1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kxgp1cb4o"/><path class="fr25qac1j"/></g>`,
		"fallback": "healthicons:sugar-alt-outline",
	});
}

export default Component;
