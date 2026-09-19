import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ez3tdzefa.css';
import '../../css/y/y-gjhqbcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ez3tdzefa"/><path clip-rule="evenodd" class="y-gjhqbcy"/></g>`,
		"fallback": "healthicons:tally2x-outline",
	});
}

export default Component;
