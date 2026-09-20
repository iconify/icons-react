import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnw53uboj.css';
import '../../css/h/h5vc5jbye.css';
import '../../css/w/wqwixuz1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pnw53uboj"/><path class="h5vc5jbye"/><path class="wqwixuz1v"/></g>`,
		"fallback": "reicon:monitor-phone-duotone",
	});
}

export default Component;
