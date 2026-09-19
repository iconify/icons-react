import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1kx2s76p.css';
import '../../css/e/e_i9ovbzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f1kx2s76p"/><path class="e_i9ovbzy"/></g>`,
		"fallback": "healthicons:intravenous-drip",
	});
}

export default Component;
