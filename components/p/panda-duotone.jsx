import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ti-f0hbhp.css';
import '../../css/r/rk9fh6f_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ti-f0hbhp"/><path class="primary rk9fh6f_g"/></g>`,
		"fallback": "iconaut:panda-duotone",
	});
}

export default Component;
