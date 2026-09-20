import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3z9z3b1e.css';
import '../../css/t/tmlzaonmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3z9z3b1e"/><path clip-rule="evenodd" class="tmlzaonmw"/></g>`,
		"fallback": "nrk:shapes-unordered-expressive",
	});
}

export default Component;
