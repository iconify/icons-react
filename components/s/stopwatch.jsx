import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g218vg50l.css';
import '../../css/d/dvp4em8nh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g218vg50l"/><path clip-rule="evenodd" class="dvp4em8nh"/></g>`,
		"fallback": "gg:stopwatch",
	});
}

export default Component;
