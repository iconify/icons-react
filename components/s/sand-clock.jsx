import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-o-z98ww.css';
import '../../css/j/ju1ac791n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-o-z98ww"/><path clip-rule="evenodd" class="ju1ac791n"/></g>`,
		"fallback": "gg:sand-clock",
	});
}

export default Component;
