import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us1rf-l6o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gg3lrpbex.css';
import '../../css/u/uo4fesb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="us1rf-l6o"/><g class="mc2zb0bvp"><path class="gg3lrpbex"/><path class="uo4fesb6x"/></g></g>`,
		"fallback": "solar:soundwave-bold-duotone",
	});
}

export default Component;
