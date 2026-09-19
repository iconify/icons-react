import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/prrmoe94x.css';
import '../../css/s/s7ynxw99h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="prrmoe94x"/><path clip-rule="evenodd" class="s7ynxw99h"/></g>`,
		"fallback": "healthicons:magic-wand-outline-24px",
	});
}

export default Component;
