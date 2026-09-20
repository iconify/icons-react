import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rc7we-j-p.css';
import '../../css/l/lbdlhc8aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rc7we-j-p"/><path class="lbdlhc8aq"/></g>`,
		"fallback": "solar:sofa-bold-duotone",
	});
}

export default Component;
