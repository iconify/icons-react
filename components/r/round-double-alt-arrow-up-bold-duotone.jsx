import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/m/mdbqoqbnj.css';
import '../../css/j/jsqmdeztq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="mdbqoqbnj"/><path class="jsqmdeztq"/></g>`,
		"fallback": "solar:round-double-alt-arrow-up-bold-duotone",
	});
}

export default Component;
