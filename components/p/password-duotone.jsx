import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_3fdbbyn.css';
import '../../css/n/n4xz-rxod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_3fdbbyn"/><path class="n4xz-rxod"/></g>`,
		"fallback": "reicon:password-duotone",
	});
}

export default Component;
