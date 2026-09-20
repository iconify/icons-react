import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c86ay074x.css';
import '../../css/g/gz6wlsiik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c86ay074x"/><path class="gz6wlsiik"/></g>`,
		"fallback": "solar:logout-bold",
	});
}

export default Component;
