import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/dayjs-bgu.css';
import '../../css/d/dr1p0554f.css';
import '../../css/u/uo3e6gbze.css';
import '../../css/h/hl78y5ebu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="dayjs-bgu"/><path class="dr1p0554f"/></g><path class="uo3e6gbze"/><path class="hl78y5ebu"/></g>`,
		"fallback": "solar:users-group-rounded-bold-duotone",
	});
}

export default Component;
