import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6hujrb1l.css';
import '../../css/u/ujb0nvh4p.css';
import '../../css/t/t2h-yb7be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6hujrb1l"/><path class="ujb0nvh4p"/><path clip-rule="evenodd" class="t2h-yb7be"/></g>`,
		"fallback": "reicon:planet4-filled",
	});
}

export default Component;
