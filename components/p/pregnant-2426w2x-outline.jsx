import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1z956ple.css';
import '../../css/f/f0my9lzhr.css';
import '../../css/j/j0fzacemd.css';
import '../../css/u/u_xlixbee.css';
import '../../css/g/gnt7jobml.css';
import '../../css/t/tf35hqbtm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g1z956ple"/><path clip-rule="evenodd" class="f0my9lzhr"/><path class="j0fzacemd"/><path clip-rule="evenodd" class="u_xlixbee"/><path class="gnt7jobml"/><path clip-rule="evenodd" class="tf35hqbtm"/></g>`,
		"fallback": "healthicons:pregnant-2426w2x-outline",
	});
}

export default Component;
