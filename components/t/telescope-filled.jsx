import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8va95bxm.css';
import '../../css/m/m8tx0gbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8va95bxm"/><path class="m8tx0gbqt"/></g>`,
		"fallback": "reicon:telescope-filled",
	});
}

export default Component;
