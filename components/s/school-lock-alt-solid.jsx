import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knwxm9b4l.css';
import '../../css/q/q9v5542hs.css';
import '../../css/x/xoonxzq-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="knwxm9b4l"/><path clip-rule="evenodd" class="q9v5542hs"/><path class="xoonxzq-i"/></g>`,
		"fallback": "flowbite:school-lock-alt-solid",
	});
}

export default Component;
