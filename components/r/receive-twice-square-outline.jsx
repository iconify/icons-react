import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtilw0b3x.css';
import '../../css/u/ugnfnu3gs.css';
import '../../css/t/t8jrtq-ro.css';
import '../../css/m/mopqlzbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtilw0b3x"/><path class="ugnfnu3gs"/><path class="t8jrtq-ro"/><path clip-rule="evenodd" class="mopqlzbvy"/></g>`,
		"fallback": "solar:receive-twice-square-outline",
	});
}

export default Component;
