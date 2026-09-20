import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/th43mszyn.css';
import '../../css/w/w5uq3cc8x.css';
import '../../css/f/fw-vshkfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="th43mszyn"/><path clip-rule="evenodd" class="w5uq3cc8x"/><path class="fw-vshkfs"/></g>`,
		"fallback": "reicon:passport2-duotone",
	});
}

export default Component;
