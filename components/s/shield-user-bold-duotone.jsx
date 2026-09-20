import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/am0-j8lcc.css';
import '../../css/v/vv52kbcqz.css';
import '../../css/v/vy605p4zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="am0-j8lcc"/><path class="vv52kbcqz"/><path class="vy605p4zs"/></g>`,
		"fallback": "solar:shield-user-bold-duotone",
	});
}

export default Component;
