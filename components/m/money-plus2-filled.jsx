import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0svvbb7h.css';
import '../../css/m/mbi97nb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f0svvbb7h"/><path class="mbi97nb1g"/></g>`,
		"fallback": "reicon:money-plus2-filled",
	});
}

export default Component;
