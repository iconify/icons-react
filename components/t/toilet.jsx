import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/niisoqbdv.css';
import '../../css/z/z14l3csvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="niisoqbdv"/><path class="z14l3csvg"/></g>`,
		"fallback": "at-icons:toilet",
	});
}

export default Component;
