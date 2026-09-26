import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmtbiq4iv.css';
import '../../css/s/s_7f1y7-k.css';
import '../../css/r/re365kb-x.css';
import '../../css/v/viki5hbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmtbiq4iv"/><path class="s_7f1y7-k"/><path class="re365kb-x"/><path class="viki5hbnd"/></g>`,
		"fallback": "solar:watch-round-bold-duotone",
	});
}

export default Component;
