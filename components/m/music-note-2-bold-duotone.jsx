import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ff-z_pbgs.css';
import '../../css/u/ugz6q-brk.css';
import '../../css/e/eg30hg2ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ff-z_pbgs"/><path class="ugz6q-brk"/><path class="eg30hg2ty"/></g>`,
		"fallback": "solar:music-note-2-bold-duotone",
	});
}

export default Component;
