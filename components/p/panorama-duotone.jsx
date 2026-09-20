import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j40zz1bke.css';
import '../../css/l/lrj_pjbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j40zz1bke"/><path class="lrj_pjbrh"/></g>`,
		"fallback": "reicon:panorama-duotone",
	});
}

export default Component;
