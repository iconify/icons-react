import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2ypyqbhm.css';
import '../../css/o/obfty755m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2ypyqbhm"/><path clip-rule="evenodd" class="obfty755m"/></g>`,
		"fallback": "reicon:ssd-filled",
	});
}

export default Component;
