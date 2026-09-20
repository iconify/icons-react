import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa5kozocz.css';
import '../../css/e/eie43ce4f.css';
import '../../css/d/dqvqeabhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wa5kozocz"/><path class="eie43ce4f"/><path clip-rule="evenodd" class="dqvqeabhm"/></g>`,
		"fallback": "solar:skateboard-bold-duotone",
	});
}

export default Component;
