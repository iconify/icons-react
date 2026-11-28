import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yi7gqvbvz.css';
import '../../css/r/rck-ejbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yi7gqvbvz"/><path class="primary rck-ejbhp"/></g>`,
		"fallback": "iconaut:mirror-duotone",
	});
}

export default Component;
