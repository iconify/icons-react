import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qwlmwesmv.css';
import '../../css/z/z3p-oqbwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qwlmwesmv"/><path clip-rule="evenodd" class="z3p-oqbwp"/></g>`,
		"fallback": "healthicons:orthotics",
	});
}

export default Component;
