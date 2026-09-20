import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueotw4bzn.css';
import '../../css/n/nepv9gb1g.css';
import '../../css/g/gm6succtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ueotw4bzn"/><path class="nepv9gb1g"/><path class="gm6succtk"/></g>`,
		"fallback": "solar:music-note-4-bold-duotone",
	});
}

export default Component;
