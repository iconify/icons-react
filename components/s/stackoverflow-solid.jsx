import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gucoigb1n.css';
import '../../css/f/fn1zbw3yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gucoigb1n"/><path class="fn1zbw3yb"/></g>`,
		"fallback": "flowbite:stackoverflow-solid",
	});
}

export default Component;
