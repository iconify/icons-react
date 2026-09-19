import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oggc80boa.css';
import '../../css/j/js5qon-jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oggc80boa"/><path class="js5qon-jx"/></g>`,
		"fallback": "griddy-icons:vault",
	});
}

export default Component;
