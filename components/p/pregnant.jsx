import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0-pqzbil.css';
import '../../css/n/n23dwtjfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0-pqzbil"/><path clip-rule="evenodd" class="n23dwtjfw"/></g>`,
		"fallback": "healthicons:pregnant",
	});
}

export default Component;
