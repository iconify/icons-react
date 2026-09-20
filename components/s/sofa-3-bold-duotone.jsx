import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bm1zy_bhc.css';
import '../../css/a/a4tqucfqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bm1zy_bhc"/><path class="a4tqucfqn"/></g>`,
		"fallback": "solar:sofa-3-bold-duotone",
	});
}

export default Component;
