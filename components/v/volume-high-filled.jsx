import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7ahm2q8q.css';
import '../../css/i/ihxsf4oll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7ahm2q8q"/><path class="ihxsf4oll"/></g>`,
		"fallback": "reicon:volume-high-filled",
	});
}

export default Component;
