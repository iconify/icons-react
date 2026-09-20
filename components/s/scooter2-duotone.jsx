import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/remsix4yj.css';
import '../../css/y/yo7fr_b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="remsix4yj"/><path clip-rule="evenodd" class="yo7fr_b_q"/></g>`,
		"fallback": "reicon:scooter2-duotone",
	});
}

export default Component;
