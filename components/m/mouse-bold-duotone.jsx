import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2z_xdbqi.css';
import '../../css/f/fj3rszkvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2z_xdbqi"/><path class="fj3rszkvq"/></g>`,
		"fallback": "solar:mouse-bold-duotone",
	});
}

export default Component;
