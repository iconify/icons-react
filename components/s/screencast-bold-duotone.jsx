import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxxxmyjfa.css';
import '../../css/g/g8017d-ng.css';
import '../../css/w/w99_q4b3f.css';
import '../../css/p/p6hmd-bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxxxmyjfa"/><path class="g8017d-ng"/><path class="w99_q4b3f"/><path class="p6hmd-bom"/></g>`,
		"fallback": "solar:screencast-bold-duotone",
	});
}

export default Component;
