import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_temcb9f.css';
import '../../css/h/hz85u5u_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_temcb9f"/><path class="hz85u5u_n"/></g>`,
		"fallback": "reicon:scissors-duotone",
	});
}

export default Component;
