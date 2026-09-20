import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jc21sb95d.css';
import '../../css/g/gz9rk8bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jc21sb95d"/><path class="gz9rk8bhm"/></g>`,
		"fallback": "reicon:link5-duotone",
	});
}

export default Component;
