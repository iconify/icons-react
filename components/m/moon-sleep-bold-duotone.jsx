import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgvasr4ld.css';
import '../../css/t/ton5smgkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tgvasr4ld"/><path class="ton5smgkd"/></g>`,
		"fallback": "solar:moon-sleep-bold-duotone",
	});
}

export default Component;
