import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-4t8ebew.css';
import '../../css/x/x6-o4ybsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-4t8ebew"/><path clip-rule="evenodd" class="x6-o4ybsa"/></g>`,
		"fallback": "reicon:star-fall4-duotone",
	});
}

export default Component;
